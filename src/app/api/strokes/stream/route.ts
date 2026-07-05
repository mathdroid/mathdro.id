import { subscribe } from "@/lib/bus";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(c) {
      c.enqueue(encoder.encode(": connected\n\n"));
      const unsubscribe = subscribe(c);
      const ping = setInterval(() => {
        try {
          c.enqueue(encoder.encode(": ping\n\n"));
        } catch {
          clearInterval(ping);
        }
      }, 30_000);
      req.signal.addEventListener("abort", () => {
        unsubscribe();
        clearInterval(ping);
        try {
          c.close();
        } catch {}
      });
    },
  });
  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-store",
      Connection: "keep-alive",
    },
  });
}
