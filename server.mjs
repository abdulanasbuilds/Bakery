import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(root, 'public');
const port = Number(process.env.PORT || 3000);

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
};

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0]);
  const normalized = path.posix.normalize(decoded);
  return normalized === '..' || normalized.startsWith('../') ? '/' : normalized;
}

async function sendFile(res, filePath, status = 200) {
  const extension = path.extname(filePath).toLowerCase();
  res.writeHead(status, {
    'Content-Type': contentTypes[extension] || 'application/octet-stream',
    'Cache-Control': 'no-store',
  });
  res.end(await readFile(filePath));
}

async function resolveSnapshot(urlPath) {
  if (urlPath === '/') return path.join(root, 'index.html');
  if (urlPath === '/manus-routes.json') return path.join(publicDir, 'manus-routes.json');

  const clean = urlPath.replace(/^\/+|\/+$/g, '');
  const routeIndex = path.join(publicDir, clean, 'index.html');
  if (existsSync(routeIndex)) return routeIndex;

  const publicFile = path.join(publicDir, clean);
  if (existsSync(publicFile) && (await stat(publicFile)).isFile()) return publicFile;
  return null;
}

const server = createServer(async (req, res) => {
  try {
    const urlPath = safePath(req.url || '/');
    const snapshot = await resolveSnapshot(urlPath);
    if (snapshot) return await sendFile(res, snapshot);
    return await sendFile(res, path.join(root, 'index.html'), 404);
  } catch (error) {
    console.error(error);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Mirror server error');
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Luna Rossa exact mirror listening on 0.0.0.0:${port}`);
});
