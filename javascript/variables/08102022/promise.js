const count = true;
let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);

//------------------Example 2---------------//
//------------chaining of promises----------//
let countValue1 = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});

// executes when promise is resolved successfully

countValue1
  .then(function successValue(result) {
    console.log(result);
  })

  .then(function successValue1() {
    console.log("You can call multiple functions this way.");
  });

//--------------------Example 3:-------------//
//---------------------catch-----------------//
// returns a promise
let countValue2 = new Promise(function (resolve, reject) {
   reject('Promise rejected'); 
});

// executes when promise is resolved successfully
countValue2.then(
    function successValue(result) {
        console.log(result);
    }
 )

// executes if there is an error
.catch(
    function errorValue(result) {
        console.log(result);
    }
);

//--------------------Example 4:------------------//
//---------------------finally--------------------//
// returns a promise
let countValue3 = new Promise(function (resolve, reject) {
    // could be resolved or rejected   
    resolve('Promise resolved'); 
});

// add other blocks of code
countValue3.finally(
    function greet() {
        console.log('This code is executed.');
    }
);