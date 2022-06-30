const http = require('http')

const server = http.createServer((req,res) => {
   if(req.url === '/'){
    res.end('Welcome to our first web')

   }
   if(req.url === '/about'){
    res.end('Here is our short history')
   }
   res.end(`
    <h1>Ooops !!!</h1>
    <p>We can't seems to find page you are requesting</p>
    <a href="/">Home</a>
    `
   )
}) 

server.listen(5123)