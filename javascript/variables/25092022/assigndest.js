var fruits= ["Apple", "Orange","Pear","Kiwi","Banana","Melon","Strawberry","Mango","Chiku","Grapes","Small-grapes"];
//even index fruits destructuring(2,4,6,8,10)
var [ , ,fruit2, ,fruit4, ,fruit6, ,fruit8, ,fruit10]= fruits;
console.log(fruit2);
console.log(fruit4);
console.log(fruit6);
console.log(fruit8);
console.log(fruit10);

//odd index fruits destructuring(1,3,5,7,9)
var fruits =[ ,fruit1, , fruit3, , fruit5, , fruit7, , fruit9];
console.log(fruit1);
console.log(fruit3);
console.log(fruit5);
console.log(fruit7);
console.log(fruit9);

//multiples of 3 destructuring (3,6,9)
var fruits= [ , , , fruit3, , ,fruit6, , , fruit9];
console.log(fruit3);
console.log(fruit6);
console.log(fruit9);
// 1,6 , and remaining fruits
var [ ,fruit1, , , , ,fruit6,...args] = fruits;  
console.log(fruit1);   
console.log(fruit6);   
console.log(args); 

function getscores(){
return [45,89,26,43,87,08,28,17,82,52,95];
}
let [x,y,z,...args1]=getscores();
console.log(getscores());
