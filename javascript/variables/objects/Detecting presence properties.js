// two objects that represent books
const book1 = {
id: 1,
title: 'Freakonomics',
publisher: 'Harper Torch',
cost: 7.99,
isbn10: '0-06-124270-5',

// returns a summary of the book
overview() {
return `${this.title}, published by ${this.publisher} retails for ${this.cost}`;
},
};

const book2 = {
id: 2,
title: 'Jurassic Park',
publisher: 'Arrow',
cost: 4.99,
};

//The ‘in’ operator searches on the object and the the prototype chain
console.log('title' in book1); //detects the presence of a property named ‘title’ in book
console.log('toString' in book1); //toString exists on the Object and Number prototype

//Object.hasOwnProperty method only searches on the object and not the prototype chain
console.log(book1.hasOwnProperty('title')); //returns true
console.log(book1.hasOwnProperty('toString'));//returns false

//accepts a book object and runs a console.log, invoking the overview function which returns a //composed string
const showDetails = (book) =>
book.hasOwnProperty('overview')
? console.log(book.overview())
: console.log('Unable to show details...');

showDetails(book1); //displays the overview of book1
showDetails(book2); //The overview method does not exist in book 2