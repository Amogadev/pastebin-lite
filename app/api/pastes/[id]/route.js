import { store } from "@/lib/store";

export async function GET(req, context) {
  const params = await context.params;
  const id = params.id;
  const key = `paste:${id}`;
  const isTest = process.env.TEST_MODE === "1";
  const headerNow = req.headers.get("x-test-now-ms");
  const now = isTest && headerNow ? Number(headerNow) : Date.now();


  let paste;
  if (process.env.NODE_ENV === "production") {
    const { kv } = await import("@vercel/kv");
    paste = await kv.get(key);
  } else {
    paste = store.get(key);
  }

  if (!paste) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  if (paste.expires_at && now >= paste.expires_at) {
    return Response.json({ error: "Expired" }, { status: 404 });
  }

  if (paste.max_views && paste.views >= paste.max_views) {
    return Response.json({ error: "Views exceeded" }, { status: 404 });
  }

  const preview = req.nextUrl.searchParams.get("preview") === "1";

    let updated = paste;
    if (!preview) {
      updated = { ...paste, views: paste.views + 1 };
    }

  if (process.env.NODE_ENV === "production") {
    const { kv } = await import("@vercel/kv");
    await kv.set(key, updated);
  } else {
    store.set(key, updated);
  }

  return Response.json({
    content: paste.content,
    remaining_views: paste.max_views
      ? paste.max_views - updated.views
      : null,
    expires_at: paste.expires_at
      ? new Date(paste.expires_at).toISOString()
      : null,
  });
}
