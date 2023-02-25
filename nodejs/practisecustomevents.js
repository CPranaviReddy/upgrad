const EventEmitter = require('events');
var emitter = new EventEmitter();
var l1 = (message) =>{
    console.log('listener 1' + message)
}
var l2 = (message) =>{
    console.log('listener 2' + message);
};

var l3 = (message) => {
    console.log('listener 3' + message);

};
emitter.on('event1', l1)
emitter.addListener('event 2', l2)
emitter.once ('event 2 ', l3)
emitter.on('event3',l3)

console.log(emitter.getMaxListeners())
console.log(emitter.listenerCount('event1'))
emitter.removeListener('event2',l3)


emitter.emit('event1', "1 emitted")
emitter.emit('event2', " 2 emitted")
emitter.emit('event2', "2 again emitted")
emitter.emit('event3', "3 emitted")
