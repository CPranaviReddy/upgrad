//------------------------------------Example 1:--------------------------------
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(p1.displayName); // undefined
console.log(p1.distance);    // undefined
console.log(p2.displayName); // undefined
console.log(p2.distance);    // undefined

console.log(Point.displayName);      // "Point"
console.log(Point.distance(p1, p2));


//-----------------------------------Example 2:--------------------------------
class Animal1 {
  
  speak() {
    console.log("i am inside speak");
    //return this;
  }
  static eat() {
    console.log("i am in inside eat method");
    //return this;
  }
}

let obj = new Animal1();
obj.speak(); // the Animal object
let speak = obj.speak;
speak(); // undefined

Animal1.eat() // class Animal--> 1st way
let eat = Animal1.eat;  // this is 2nd way to call
eat();