import { createRequestListener } from '@mjackson/node-fetch-server';
import fs from 'fs/promises';
import path from 'node:path';
import { handler } from './entry.server.js';
import { PORT } from './env.js';

export const base = `http://localhost:${PORT}`;

async function serveJSFile(url: URL) {
  const filePath = path.join(process.cwd(), 'public', url.pathname);
  const src = await fs.readFile(filePath, 'utf-8');
  return new Response(src, {
    headers: {
      'Content-Type': 'application/javascript',
      'Cache-Control': 'no-store; must-revalidate',
    },
  });
}

export const listener = createRequestListener(async (request) => {
  const url = new URL(request.url, base);

  if (url.pathname.endsWith('.map')) {
    return new Response();
  }
  if (url.pathname.endsWith('.js')) {
    return serveJSFile(url);
  }
  return handler(request);
});
