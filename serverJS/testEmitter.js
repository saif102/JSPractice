const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('message', function (value) {
    console.log(value);

});

//export the module
module.exports = emitter;