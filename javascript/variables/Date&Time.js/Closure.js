//-----------------------Example 1: JavaScript Closures--------------------------
//In JavaScript, closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed. For example,
//javascript closure example

// outer function
function greet() {

    // variable defined outside the inner function
    let name = 'John';
    console.log("i am inside greet function()");

    // inner function
    function displayName() { // closure function
       let r = 45;
        // accessing name variable
        return 'Hi' + ' ' + name;
    }
    return displayName;
}

const g1 = greet();
console.log(g1); // returns the function definition
console.log(g1()); // returns the value


//----------------------Example 2:---------------------------------
function calculate(x) {
    function multiply(y) {   //closure function
        return x * y;
    }
    return multiply;
}

const multiply3 = calculate(3);
const multiply4 = calculate(4);

console.log(multiply3); // returns calculate function definition
console.log(multiply3()); // NaN

console.log(multiply3(6)); // 18
console.log(multiply4(2)); // 8


/*In the above program, the calculate() function takes a single argument x and returns the function definition of the multiply() function. The multiply() function takes a single argument y and returns x * y.
Both multiply3 and multiply4 are closures.
The calculate() function is called passing a parameter x. When multiply3 and multiply4 are called, the multipy() function has access to the passed x argument of the outer calculate() function.

-------------------Example 3: Data Privacy using closure---------------------------
//JavaScript closure helps in the data privacy of the program. For example,*/

let a = 0;
function sum() {
    function increaseSum() {

        // the value of a is increased by 1
        return a = a + 1;
    }
    return increaseSum;
}

const x = sum();
console.log(x()); // 1
console.log(x()); // 2
console.log(x()); // 3
a = a + 1;
console.log(a); // 4