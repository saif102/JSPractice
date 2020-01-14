//importing the required packages
const http = require ('http');
const events = require ('events');

//declare server variables
const hostname = '127.0.0.1';
const port = 3000;

//declare a message to print
let message = 'Event has been triggerd';

//create an object of EventEmitter class from events module
const myEmitter = new events.EventEmitter();

//subscribe the ping event
myEmitter.on('ping', (data)=>{
    message = `${message} - After event fired...`
});

//creating the server
const server = http.createServer((req, res)=>{
    res.writeHead(200);
    //raising ping event
    myEmitter.emit('ping', message);
    res.end(`Message: ${message}`);
});

//server listening
server.listen(port, hostname, ()=>{
    console.log(`Server is runnig at http://${hostname}:${port}/`);
});