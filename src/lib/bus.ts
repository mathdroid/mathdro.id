// ponytail: in-memory SSE fanout, single-instance only; move to redis pubsub if this ever scales out
const subs: Set<ReadableStreamDefaultController> = ((globalThis as any).__subs ??=
  new Set());

const encoder = new TextEncoder();

export function subscribe(c: ReadableStreamDefaultController) {
  subs.add(c);
  return () => subs.delete(c);
}

export function publish(data: unknown) {
  const chunk = encoder.encode(`data: ${JSON.stringify(data)}\n\n`);
  for (const c of subs) {
    try {
      c.enqueue(chunk);
    } catch {
      subs.delete(c);
    }
  }
}
