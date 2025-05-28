/**
 * Handler.
 * @returns Response.
 */
export function handler(): Response {
  return new Response("Welcome to Bun!");
}

const server = Bun.serve({
  fetch: handler,
  port: 3000,
});

console.log(`Listening on ${server.url.toString()}`);
