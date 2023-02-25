/*async function f() {
    console.log('Async function.');
    return Promise.resolve(1);
}

f(); 

//-----------------------------------------------------------//
const doSomethingAsync = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 3000)
    })
  }
  
  /* When you want to call this function you prepend await, and the calling code will 
  stop until the promise is resolved or 
  rejected*/
  /*const doSomething = async () => {
    console.log(await doSomethingAsync())
  }

console.log('Before')
doSomething()
console.log('After')
console.log('After>>>>>>')

//-----------Await()------- Example 2-------------------------

let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved example 2')}, 4000); 
});

// async function
async function asyncFunc1() {

    // wait until the promise resolves 
    let result = await promise1; // it will wait till the promise1 value is either reoslved or rejected

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc1();


//-------- Await() ------ Example 3:------------------------

// a promise
let promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved example 3')}, 4000); 
});

// async function
async function asyncFunc() {
    try {
        // wait until the promise resolves 
        let result = await promise2; 

        console.log(">>" + result);
    }   
    catch(error) {
        console.log(">>>>" +error);
    }
    finally{  // always execute if pass or fail
      console.log("we are into finally block");
    }
}

// calling the async function
asyncFunc(); // Promise resolved
*/

//------------------ Example 4 -----------------------//
//------- Multiple Async functions in series ----------//
const promiseToDo = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 3000)
    })
  }
  
  const watchOver = async () => {
    const something = await promiseToDo()
    return something + '\nand I watched'
  }
  
  const watchOverSomeone = async () => {
    const something = await watchOver()
    return something + '\nand I watched as well'
  }
  
  watchOverSomeone().then(res => {
    console.log(res)
  })
  