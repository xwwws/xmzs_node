const http = require('node:http');
const url = require('node:url');
const fs = require('node:fs');
const { createProxyMiddleware } = require('http-proxy-middleware')
const html = fs.readFileSync('./index.html', 'utf8');

const config = require('./app.config.js');
const app = http.createServer((req, res) => {
  const proxyList = Object.keys(config.serve.proxy)
  const pathname = url.parse(req.url).pathname
  if (proxyList.includes(pathname)) {
    const proxy = createProxyMiddleware(config.serve.proxy[pathname])
    proxy(req, res, (err) => {
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      res.end(err)
    })
    return
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html)
});




app.listen(3000, () => {
  console.log('Listening on port 3000');
});