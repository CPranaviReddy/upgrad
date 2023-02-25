//------------------------- Example 1:-------------------------------
const book = {
    id: 1,
    title: 'Freakonomics',
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
    publisher: 'Harper',
    isbn10: '0-06-124270-5',
    cost: 7.99,
    };
    
    // mutating the original object by adding a new property named publisher
    //book.publisher = 'Harper Torch';
    //book.title = 'Freakonomics 2020';
    
    //Destructuring assignment to pluck out title, authors and cost
    let { title, authors, cost, publisher } = {
    
    //spread operator to create a new object instead of mutating the original object
    ...book,
    title: 'Freakonomics 2020',
    publisher: 'Harper Torch',
    };
    
    //display the data
    console.log(`${title} is written by ${authors.map((el) => el.name).join('  and   ')}. it costs $${cost} and the pubshier is ${publisher}`);
    

//---------------------------------- Example 2:-------------------------------------------------
const user = {
id: 1,
name: 'Joe Simmons',
age: 23,
};

const banking = {
accountType: 'Savings',
accountNum: '01090110234897',
bank: 'The Cloud Bank of Cayman Islands',
};


// Mutating by looping over the object to add to the target and dynamically add the properties.
for (const obj in banking) {
 user[obj] = banking[obj];
}

 console.log(user);

// OLD METHOD
//let userDetails = Object.assign({}, user, banking);
//console.log(userDetails);

// NEW METHOD
let userDetails = {
...user,
...banking,
email: 'joe@racketeer.co',
};

console.log(userDetails);