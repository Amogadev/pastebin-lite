export async function GET() {
  // Local development: always healthy
  if (process.env.NODE_ENV !== "production") {
    return Response.json({ ok: true }, { status: 200 });
  }

  try {
    const { kv } = await import("@vercel/kv");
    await kv.ping();
    return Response.json({ ok: true }, { status: 200 });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
}
