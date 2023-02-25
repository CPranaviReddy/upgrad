const p1 = Promise.reject(1);
const p2 = new Promise((resolve) => setTimeout(resolve, 300, 2));
const p4 = Promise.reject(2);
const p3 = new Promise((resolve) => setTimeout(resolve, 200, 45));

const promises = [p1, p2, p3,p4];

Promise.any(promises).then((value) => console.log(value));