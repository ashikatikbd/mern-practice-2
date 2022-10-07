const http = require('http');
const server = http.createServer(function(req,res){
    res.end('<h1>Server Response by created Ashikur Rahman</h1>')
})
server.listen(8080)
console.log('Server is running ..........');
console.log('i love my country...');
console.log('This is a computer');