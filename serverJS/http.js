const http = require ('http');
const myMessage = require ('./MyMessage');

const server = http.createServer((req, res)=>{
    res.writeHead(200);
    res.end('Hello World!');
});

server.listen(3000);
console.log('Server is listening at port...');