const EventEmitter = require('events');
var emitter = new EventEmitter();

emitter.on('event1',(message) =>{     // execute multiple times
    console.log(message);
})

emitter.addListener('event2',(message) =>{    // execute multiple times
    console.log(message);
})

emitter.once('event3',(message) =>{    // execute only once
    console.log(message);
})

emitter.emit('event1',"1 emitted");   // this is used to trigger the even using the emit()

emitter.emit('event2',"2 emitted");
emitter.emit('event3',"3 emitted");

emitter.emit('event1',"1 again emitted");
emitter.emit('event3',"3 again emitted");

console.log(emitter.getMaxListeners());
console.log(emitter.setMaxListeners(7));
console.log(emitter.listenerCount());
console.log(emitter.listenerCount('event1'));
console.log(emitter.listenerCount('event2'));
console.log(emitter.getMaxListeners());
