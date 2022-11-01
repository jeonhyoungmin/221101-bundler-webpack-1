const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res) => {
  const main = fs.readFileSync("./index.html")
  if(req.url === '/'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end(main)
  }
})

server.listen(5678, (err) => {
  if (err) throw err;
  console.log("5678 포트에서 서버 가동 중")
})