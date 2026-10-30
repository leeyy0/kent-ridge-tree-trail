import http from 'node:http';
import path from 'node:path';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const types = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.mjs':'text/javascript; charset=utf-8', '.css':'text/css', '.json':'application/json', '.jpg':'image/jpeg', '.png':'image/png', '.svg':'image/svg+xml', '.md':'text/plain; charset=utf-8' };
const server = http.createServer(async (req,res) => {
  try {
    const url = new URL(req.url, 'http://127.0.0.1');
    if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405).end(); return; }
    const file = path.resolve(root, '.' + decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname));
    if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
    const data = await readFile(file);
    res.writeHead(200, {'Content-Type':types[path.extname(file)] || 'application/octet-stream','Cache-Control':'no-cache'});
    res.end(req.method === 'HEAD' ? undefined : data);
  } catch { res.writeHead(404, {'Content-Type':'text/plain'}).end('File not found'); }
});
server.on('error', error => {
  console.error(error.code === 'EADDRINUSE' ? 'Port is already in use. Open http://127.0.0.1:4173, or set PORT to another number.' : error.message);
  process.exitCode = 1;
});
server.listen(Number(process.env.PORT || 4173), '127.0.0.1', () => console.log('Kent Ridge Tree Trail: http://127.0.0.1:' + server.address().port));
