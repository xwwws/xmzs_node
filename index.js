import http from 'http';
import fs from 'fs';
import mime from 'mime';
import path from 'path';
const app = http.createServer((req, res) => {

  const {method, url} = req
  // 获取静态资源
  if (method === 'GET' && url.startsWith('/static')) {
    const filePath = path.join(process.cwd(), url)
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 404
        res.end('NOT FOUND')
      } else {
        const type = mime.getType(filePath)
        res.writeHead(200, {
          'Content-Type': type,
          "cache-control": "public, max-age=3600"
        })
        res.end(data)
        
      }
    })
  }


  if(method === 'POST' || method === 'GET' && url.startsWith('/api')) {

  }


});




app.listen(3000, () => {
  console.log('Listening on port 3000');
});