import { clearStrokes, today } from "@/lib/db";
import { publish } from "@/lib/bus";

export const dynamic = "force-dynamic";

const hex = (s: string) =>
  Uint8Array.from(s.match(/../g)!.map((b) => parseInt(b, 16)));

// Discord signs every request; reject anything we can't verify with the app public key.
async function verified(req: Request, body: string) {
  const sig = req.headers.get("x-signature-ed25519");
  const ts = req.headers.get("x-signature-timestamp");
  const key = process.env.DISCORD_PUBLIC_KEY;
  if (!sig || !ts || !key) return false;
  const pub = await crypto.subtle.importKey(
    "raw",
    hex(key),
    { name: "Ed25519" },
    false,
    ["verify"],
  );
  return crypto.subtle.verify(
    "Ed25519",
    pub,
    hex(sig),
    new TextEncoder().encode(ts + body),
  );
}

const ephemeral = (content: string) =>
  Response.json({ type: 4, data: { content, flags: 64 } });

export async function POST(req: Request) {
  const body = await req.text();
  if (!(await verified(req, body)))
    return new Response("bad signature", { status: 401 });

  const i = JSON.parse(body);
  if (i.type === 1) return Response.json({ type: 1 }); // PING -> PONG

  if (i.type === 3 && i.data?.custom_id === "wipe") {
    const userId = i.member?.user?.id ?? i.user?.id;
    if (userId !== process.env.ADMIN_DISCORD_ID)
      return ephemeral("this button isn't for you.");
    clearStrokes(today());
    publish({ type: "clear" });
    return ephemeral("wiped today's drawings.");
  }

  return ephemeral("unhandled.");
}
