//------------------Example 1: for..of---------------
const word = 'RESPECT';
for(const w of word){
  console.log(w);
}

//------------------Example 2: for..of----------------

const averageOfNums = function(){
let sum = 0;
for(const argument of arguments){
 sum += argument;
}
return sum/arguments.length;
};

console.log(averageOfNums(1,2,3));
console.log(averageOfNums(2,5,9,8));


//------------------Example 3: for..of----------------
const users = [
 {
  id: 1,
  name: 'Ramesh',
  age: 30,
  profession: 'Doctor',
 },
 {
  id: 2,
  name: 'John',
  age: 25,
  profession: 'Student',
 },
];

const introduceUser = (user) =>
`${user.name} is ${user.age} years old and works as a ${user.profession}`;

for(const user of users){
  console.log(introduceUser(user));
}


//------------------Example 4: for..in----------------

const user = [
  {
   id: 1,
   name: 'Ramesh',
   age: 30,
   profession: 'Doctor',
  },
  {
   id: 2,
   name: 'John',
   age: 25,
   profession: 'Student',
  },
 ];

for(const prop in user){
  console.log(user[prop]);
}


//-----------------Example 5: for..in---------------
const student = {
    name: 'Monica',
    class: 7,
    age: 12
}

// using for...in
for ( let key in student ) {

    // display the properties
    console.log(`${key} => ${student[key]}`);
}


//---------------Example 6: Update Values of Properties---
const salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}

// using for...in
for ( let i in salaries) {

    // add a currency symbol
    let salary = "$" + salaries[i];

    // display the values
    console.log(`${i} : ${salary}`);
}