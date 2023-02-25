const user = {
id: 1,
name: 'Joe M',
age: 20,
home: {
address: '121, Prive Lane, New Donutshire',
city: 'Boston',
state: 'MA',
country: 'US',
favColors: ['Red', 'Black'],
loc: {
lat: 61.2039,
long: 34.2019,
},
},
};

// Seal the object to mutate the values but not add top-level properties or nested object //propeties
const deepSeal = (obj) => {
Object.values(obj).forEach(
(elem) => typeof elem === 'object' && deepSeal(elem)
);

//Object.isSealed  checks if the object is already sealed
return !Object.isSealed(obj) && Object.seal(obj);
};

//completely freeze and lock off the object from any modification, be it structural or data.
const deepFreeze = (obj) => {
Object.values(obj).forEach(
(elem) => typeof elem === 'object' && deepFreeze(elem)
);

return !Object.isFrozen(obj) && Object.freeze(obj);
};

console.log(user);