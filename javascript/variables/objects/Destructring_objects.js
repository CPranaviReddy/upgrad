//---------------------- Example 1: -----------------------------------
// object that represents details of a popular book title with destructuring assignment
const { title, publisher, authors, cost } = {
id: 1,
title: 'Freakonomics',
//authors is an array of objects,
authors: [
{
authorCode: 210,
name: 'Steven D. Levitt',
},
{
authorCode: 231,
name: 'Stephen J. Dubner',
},
],
publisher: 'Harper Torch',
isbn10: '0-06-124270-5',
cost: 7.99,
};

//use the map and join method in-line to get the author names and separate them with ‘and

console.log(
`${title} is published by ${publisher} and is writen by ${authors
.map((el) => el.name)
.join(' and ')}. It costs $${cost}`
);

//---------------------- Example 2: -----------------------------------
//object that represents stock details for Tesla with custom variable names
const tsla = {
stIdx: 2013234,
stName: 'TSLA',
stCurrPrc: 836.16,
stExc: 'NASDAQ',

stDetails: {        //nested object
name: 'TESLA, Inc',
ceo: 'Elon Musk',
hq: 'Paolo Alto, California, United States',
},
};

//assign properties to custom variable names
let {
stName: stock,
stCurrPrc: value,
stExc: exchange,

//Destructuring assignment also allows you to extract values from nested objects.
stDetails: { name: company, ceo, hq }, ...rest
} = tsla;

//rest operator to collect all remaining properties as an object under one variable name 
//display the data
console.log(`${stock} is trading for $${value} on ${exchange}`);
console.log(`${company} is headquartered in ${hq} and headed by ${ceo}`);
console.log(rest);