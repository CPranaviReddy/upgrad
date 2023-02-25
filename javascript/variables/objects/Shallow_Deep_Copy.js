// object user with multiple nested objects including an array.
const user = {
id: 1,
name: 'Joe M',
age: 20,

//nested object
home: {
address: '121, Prive Lane, New Donutshire',
city: 'Boston',
state: 'MA',
country: 'US',
favColors: ['Red', 'Black'],

//nested object
loc: {
lat: 61.2039,
long: 34.2019,
},
},
};

// WRONG - we cannot clone this object using direct reassignment because variable //joeM points to the same object as the constant ‘user’.
//const joeM = user;

// The spread operator allows us to create a true but shallow clone of the object.
const joeM1 = { ...user };
console.log('shallow cloned copy' + JSON.stringify(joeM1));


//------Method ---- //
// DEEP CLONE creates a true clone where nested objects are also cloned
const deepCopy = function (obj) {

//instantiate a new object to which we’ll copy properties from the source.
let tempObj = {};

//At every iteration, set the temporary object to spread the existing properties and add the //current property and its value.
for (let key in obj) {
tempObj = {
...tempObj,

//computed properties syntax which allows us to generate a property name programmatically //by using bracket notation
[key]:

// detect if the value is an object using a ternary and logical AND, if yes, recursively invoke the    // deepCopy function so that its sub-objects are de-referenced and cloned. 

typeof obj[key] === 'object' && !Array.isArray(obj[key]) // detect if object is an Object or an array
? { ...deepCopy(obj[key]) }
: typeof obj[key] === 'object' && !Array.isArray(obj[key]) // if array return shallow clone of array
? [...obj[key]]
: obj[key],
};
}

return tempObj;
};

let joeM = deepCopy(user);

joeM.age = 22; // works, original object stays intact while the clone gets updated

// doesn't work, mutates as the original object is not the user object but the object that //user.home property points to
joeM.home.address = '157, Lotus Lane, Flowerville';
joeM.home.loc.lat = 63;
joeM.home.favColors = ['White'];

console.log('Original: ', user); // original object

console.log('Copy: ', joeM); // copy or clone