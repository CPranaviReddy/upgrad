const EventEmitter = require('events');  // Step :1
var emitter = new EventEmitter();        // Step :2

var list1= (message) =>{       // Listener -1
    console.log('listener 1 > '+message);
};

var list2= (message) =>{       // Listener -2
    console.log('listener 2 > '+message);
};

var list3= (message) =>{       // Listener -3
    console.log('listener 3 > '+message);
};

emitter.once('event1', list1);
emitter.addListener('event2',list2);
emitter.addListener('event2',list3);
emitter.on('event3',list3)

console.log('total number of default listerners ' +emitter.getMaxListeners());
console.log(emitter.listenerCount());

console.log('total number of evemt2 ' + emitter.listenerCount('event2'));
console.log('total number of evemt1 ' +emitter.listenerCount('event1'));

emitter.emit('event1',"1 emitted")
emitter.emit('event1',"1  again emitted")
emitter.emit('event2',"2 emitted")
emitter.emit('event3',"3 emitted")

emitter.removeListener('event2',list3)

console.log("----------------------------------")

emitter.emit('event1',"1 emitted")
emitter.emit('event1',"1  again emitted")
emitter.emit('event2',"2 emitted")
emitter.emit('event3',"3 emitted")