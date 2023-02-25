//------------------------------- Example 1--------------------------------------
// object that describes stock details
const tsla = {
stIdx: 2013234,
stName: 'TSLA',
stCurrPrc: 836.16,
stDetails: {
name: 'TESLA, Inc',
ceo: 'Elon Musk',
hq: 'Paolo Alto, California, United States',
},
};

console.log(Object.getOwnPropertyDescriptor(tsla,'stIdx'));
console.log('fetching the propety stIdx of the existing writable default:' + Object.getOwnPropertyDescriptor(tsla, 'stIdx').writable);

//Object.defineProperty on the tsla object and configure the stIdx property
Object.defineProperty(tsla, 'stIdx', {
writable: false, // making stdIdx read-only to prevent overriding its value
});

console.log('fetching the propety stIdx of the existing default:' + Object.getOwnPropertyDescriptor(tsla, 'stIdx').enumerable);
console.log('fetching the propety stIdx of the existing writable:' + Object.getOwnPropertyDescriptor(tsla, 'stIdx').writable);

//Creating a property named stExc.  
Object.defineProperty(tsla, 'stExc', {
value: 'NASDAQ',
writable: true, // property can be changed
enumerable: false, //property cannot be enumerated
configurable: false, //property cannot be deleted
});

for (let i in tsla) {    //iterate through the property names
console.log(i);
}

let {
stName: stock,
stCurrPrc: value,
stExc: exchange,
stDetails: { name: company, ceo, hq },
} = tsla;

console.log(`${stock} is trading for $${value} on ${exchange}`);
console.log(`${company} is headquartered in ${hq} and headed by ${ceo}`);


//------------------------------------Example 2:-----------------------------------------
// constructor function to create instances of user objects with properties pre-configured.

const User = function () {
let name = '', //create a local variable inside the constructor function
age,
changes = []; // log of changes



//set and configure multiple properties on the ‘this’ context object
Object.defineProperties(this, {
id: { //generate a unique ID which is read-only
enumerable: true,
value: `UID-${parseInt(Math.random() * 30000)}-XZ`,
},


name: {
enumerable: true,

// set value to name
set(val) {
changes.push(`name set to ${val}`); //record log
name = val.toUpperCase();
},


// get name
get() {
return name;
},
},

age: {
enumerable: true,

// set value to age
set(val) {
changes.push(`age set to ${val}`); //record log
age = val;
},

//get age
get() {
return age;
},
},

changes: {
configurable: false,

// get log of changes

get() {
return changes;
},
},
});
};

const joe = new User();

//set the properties
joe.name = 'Joe Mockery';
joe.name = 'Perry';
joe.age = 25;
joe.age = 27;

//console.log(joe.id, joe.name, joe.age);

for (const i in joe) {
console.log(joe[i]);
}
console.log(joe.changes); //to see a log of changes that were applied