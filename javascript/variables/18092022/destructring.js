var arr = ["Hello", "World"]  
  
//destructuring assignment  
var [first, second] = arr;  
console.log(first); 
console.log(second); 


//-------------Example 1-------------//
var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
  
// destructuring assignment  
var[color1, color2, color3] = colors;  
  
console.log(color1); 
console.log(color2); 
console.log(color3);

// destructuring assignment  
//These array elements are in positions 0, 3, and 5//
var[color1, , ,color4, ,color6] = colors; //Leave space for unpick elements 
console.log(color1); 
console.log(color4);
console.log(color6);   

var [a,b,...args] = colors;  
console.log(a);   
console.log(b);   
console.log(args); 


//------------Example 2:------------//
function getScores() {
   return [70, 80, 90, 100, 110, 120, 130, 150];
}

let [x, y, z,...args1] = getScores();
console.log(x); // 70
console.log(y); // 80
console.log(z); // undefined
console.log(args1);

//-----------Example 3:-------------//
// Default values can be assigned to the variables just in case the 
// value extracted from the array is undefined
let [greeting = "hi",name = "Sarah"] = ["hello","Vinay"];

console.log(greeting);//"Hello"
console.log(name);//"Sarah"


//-------------Example 4:------------//
function getItems() {
    return [10, 20];
}

let [, , thirdItem = 0] = getItems();
console.log(thirdItem);


//--------------Example 5:-----------//
// extract data from an array returned from a function//
function getArray() {
    return ["Hello", "I" , "am", "Sarah"];
} 

let [greeting1,pronoun1] = getArray();

console.log(greeting1);//"Hello"
console.log(pronoun1)


//--------------Example 6:-----------//
function getProfile() {
    return [
        'John',
        'Doe',
        ['Red', 'Green', 'Blue']
    ];
}

let [
    firstName,
    lastName,
    [
        col1,
        col2,
        col3
    ]
] = getProfile();

console.log(col1, col2, col3);


//---------------Example 7:-----------//
// Objects can also be nested when destructuring
let person = {
    name: "Sarah",
    place: {
        country: "Nigeria", 
        city: "Lagos" }, 
    friends : ["Annie", "Becky"]
};

let {name:foo,
     place: {
         country : bar,
         city : x1}
    } = person;

console.log(foo);//"Sarah"
console.log(bar);//"Nigeria"

//----------------Example 8:-------------//
//--The rest syntax can also be used to pick up property keys that are not
//--already picked up by the destructuring pattern. Those keys and their values
//--are copied into a new object:
let person1 = {name1: "Viren", country1: "India", job: "Developer" ,friends1: ["Lakshaya", "Nikhil"]};

let {name1, friends1, ...others} = person1;

console.log(name1);
console.log(friends1);
console.log(others);

//--------------Example 9:----------------//
var [first = "Cotlin", second = first] = [];
console.log(first); //Output: Cotlin
console.log(second); //Output: Cotlin

var [first = "Cotlin", second = first] = ["Koku"];
console.log(first); //Output: Koku
console.log(second); //Output: Koku

var [first = "Cotlin", second = first] = ["Koku", "Lydia"];
console.log(first); //Output: Koku
console.log(second);

//------------Example 10:------------------//
var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];

var [first, second, ...rest] = ["Mercury", "Earth", ...planets, "Saturn"];

console.log(first); //Output: Mercury
console.log(second); //Output: Earth
console.log(rest);

//------------Example 11:-----------------//
//--One destructuring expression can be used in swapping the values of two variables//
var a, b;
[a, b] = ["Male", "Female"];
[a, b] = [b, a];

console.log(a); //Output: Female
console.log(b);