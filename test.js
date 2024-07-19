import http from 'http'
import url from 'url'
http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname
  console.log(pathname)
  res.end('hello')
}).listen(65534, () => {
  console.log('listening on port 65534')
})