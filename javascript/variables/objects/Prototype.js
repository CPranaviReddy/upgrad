//In JavaScript, every function and object has a property named prototype by default. For example,
//we have added a new property gender to the Person constructor function 
//object person1 and person2 inherits the property gender from the prototype property of Person constructor function

//===============Add variables using prorotype======================
// constructor function

function Person () {
    this.name = 'John',
    this.age = 23
}
// creating objects
const person11 = new Person();
const person2 = new Person();

console.log("???????" + person11);

Person.prototype.age = 30;
console.log("person 11 age" + person11.age);
console.log("person 2 age" + person2.age);
// adding property to constructor function
Person.prototype.gender = 'male';
Person.prototype.college = 'ABC';

// prototype value of Person
console.log(Person.prototype);

// inheriting the property from prototype
console.log(person11.gender);
console.log(person2.gender);

//===== Add Methods to a Constructor Function Using Prototype====   
Person.prototype.greet = function() {               // adding a method to the constructor function
    console.log('hello' + ' ' +  this.name);
}

person11.greet(); // hello John
person2.greet(); // hello John
/*

//==============You can also access the prototype property of a constructor function from an object================

function Person () {
    this.name = 'John'
}

// adding a prototype
Person.prototype.age = 24;

// creating object
const person = new Person();

// accessing prototype property
console.log(Person.__proto__); 
console.log(Person.constructor); 
*/

//=============== Changing Prototype ============================
//If a prototype value is changed, then all the new objects will have the changed property value. All the previously created objects will have the previous value. 

// constructor function
function Person() {
    this.name = 'John'
}

// add a property
Person.prototype.age = 20;

// creating an object
const person1 = new Person();

console.log(person1.age); // 20

// changing the property value of prototype
Person.prototype = { age: 50 }

// creating new object
const person3 = new Person();

console.log(person3.age); // 50
console.log(person1.age); // 20


//=================== JavaScript Prototype Chaining==========================
//If an object tries to access the same property that is in the constructor function and the prototype object, the object takes the property from the constructor function

function Person() {
    this.name = 'John'
}

// adding property 
Person.prototype.name = 'Peter';
Person.prototype.age = 23

const person12 = new Person();

console.log(person12.name); // John
console.log(person1.age); // 23

Person.prototype = {name: 'Peter'}

console.log(person12.name); 
console.log(person1.age);

const person13 = new Person();

console.log(person13.name); 
console.log(person1.age);

/*
//a property name is declared in the constructor function and also in the prototype property of the constructor function.
//When the program executes, person1.name looks in the constructor function to see if there is a property named name. Since the constructor function has the name property with value 'John', the object takes value from that property.

//When the program executes, person1.age looks in the constructor function to see if there is a property named age. Since the constructor function doesn't have age property, the program looks into the prototype object of the constructor function and the object inherits property from the prototype object (if available).

*/