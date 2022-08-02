// HTTP
const http = require('http')

// creating a server
// req ==> incoming requests
// res ==> what we are sending to who requested
const server =http.createServer((req,res)=>{
    res.write('Welcome to the homepage')
    res.end()

}).listen(8080)