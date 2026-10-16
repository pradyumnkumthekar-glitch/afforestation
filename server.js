const http = require('http');
const fs = require('fs');
const path = require('path');
const chatHandler = require('./api/chat.js');

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.txt': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // Handle /api/chat
  if (pathname === '/api/chat') {
    if (req.method !== 'POST') {
      res.writeHead(405, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    }

    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const jsonBody = body ? JSON.parse(body) : {};
        const mockReq = {
          method: 'POST',
          body: jsonBody
        };
        const mockRes = {
          statusCode: 200,
          status(code) {
            this.statusCode = code;
            return this;
          },
          json(data) {
            res.writeHead(this.statusCode, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
          }
        };
        await chatHandler(mockReq, mockRes);
      } catch (err) {
        console.error('Server /api/chat error:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message || 'Server Error' }));
      }
    });
    return;
  }

  // Handle static files
  let filePath = pathname === '/' ? 'index.html' : pathname.replace(/^\//, '');
  // Sanitize path against directory traversal
  const safePath = path.normalize(filePath).replace(/^(\.\.[\/\\])+/, '');
  const absPath = path.join(__dirname, safePath);

  fs.stat(absPath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index.html for SPA routes
      fs.readFile(path.join(__dirname, 'index.html'), (indexErr, content) => {
        if (indexErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          return res.end('404 Not Found');
        }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(content);
      });
      return;
    }

    const ext = path.extname(absPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(absPath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end('500 Internal Server Error');
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    });
  });
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`🌿 Afforestation web server & Gemini chat API running at http://localhost:${PORT}`);
  });
}

module.exports = server;
