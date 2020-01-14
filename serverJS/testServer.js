const http = require('http');
const emitter = require('./testEmitter');
const run = emitter.emit('message', 'Event is listening...!');
const printMessage = function (val) {
    if(val === true){
        return 'Message received..!';
    }else{
        return 'Message not received..!';
    }
};

//create server
http.createServer((req, res)=>{
    res.writeHead(200);
    res.write(printMessage(run));
    res.end();
}).listen(3000);

console.log('Server is listening to the port 3000...!');