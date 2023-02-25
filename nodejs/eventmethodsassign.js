const EventEmitter = require('events');
var emitter = new EventEmitter();
var list1 = (message) =>{
    console.log('listener 1 >' + message);
};
var list2 = (message) =>{
    console.log('listener 2 >' + message);
};
var list3 = (message) =>{
    console.log('listener 3 >' + message);
};
var list4 = (message) =>{
    console.log('listener 4>' + message);
};

emitter.once('eventA',list1);
emitter.on('eventA',list2);
emitter.on('eventB',list2);
emitter.addListener('eventB',list3);
emitter.addListener('eventC',list3);
emitter.addListener('eventD',list3);
emitter.on('eventD',list4);
emitter.on('eventE',list4);
emitter.once('eventF',list1);
console.log('total number of default listeners'+ emitter.getMaxListeners());
console.log(emitter.listenerCount());
console.log('total number of eventA '+ emitter.listenerCount('eventA'));
console.log('total number of eventB '+emitter.listenerCount('eventB'));
console.log('total number of eventC '+emitter.listenerCount('eventC'));
console.log('total number of eventD '+emitter.listenerCount('eventD'));
console.log('total number of eventE '+emitter.listenerCount('eventE'));
console.log('total number of eventF '+emitter.listenerCount('eventF'));
emitter.emit('eventA',"1 emitted");
emitter.emit('eventA',"1 again emitted");
emitter.emit('eventB',"2 emitted");
emitter.emit('eventC',"1 emitted")
emitter.emit('eventD',"2 emitted")
emitter.emit('eventE',"1 emitted")
emitter.emit('eventF',"1 again emitted")


emitter.removeListener('eventF',list1);
emitter.removeListener('eventD',list4);
emitter.removeListener('eventD',list3);

console.log("----------------------------------")

emitter.emit('eventA',"1 emitted")
emitter.emit('eventA',"1  again emitted")
emitter.emit('eventB',"2 emitted")
emitter.emit('eventC',"1 emitted")
emitter.emit('eventD',"2 emitted")
emitter.emit('eventE',"1 emitted")
emitter.emit('eventF',"1  again emitted")



