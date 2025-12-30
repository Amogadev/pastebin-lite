import { store } from "@/lib/store";

export async function GET() {
  try {
    if (process.env.NODE_ENV === "production") {
      const { kv } = await import("@vercel/kv");
      await kv.set("healthz", "ok", { ex: 5 });
    } else {
      store.set("healthz", "ok");
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
}
