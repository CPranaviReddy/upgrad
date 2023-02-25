const p1 = Promise.reject(1);
const p2 = new Promise((resolve) => setTimeout(resolve, 200, 2));
const p3 = new Promise((resolve) => setTimeout(resolve, 300, 3));

const promises = [p1, p2, p3];

Promise.any(promises).then((value) => console.log(value));
/*
explanation:
The p1 will be rejected immedately with the value 1.
The p2 will be resolved in 200ms with the value 2.
The p3 will be resolved in 300ms with the value 3.
Second, pass all three Promise objects to the Promise.any() method.

Since the promise2 will be fulfilled first, the Promise.any() method returns the promise2 object that resolves to value 2.

It’s important to note that the Promise.any() resolves with the first Promise to fulfill even if there’s a promise that rejects first.
 This is in contrast to Promise.race() method, which resolves or rejects with the first Promise to settle.
*/
//------------------ Example 2:------------------------//

const pErr = new Promise((resolve, reject) => {
  reject("Always fails");
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Done eventually");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Done quick");
});

Promise.any([pErr, pSlow, pFast]).then((value) => {
  console.log(value);
});

//------------------ Example 3:-----------------------//

const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises1 = [promise1, promise2, promise3];

Promise.any(promises1).then((value) => console.log(value));
