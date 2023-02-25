const fs = require('fs');
var file = 'customer.json'

function createFile() {
 fs.open(file,'w',(err) =>
 {
     console.log(err);
 });
}

function loadData()  //loading the data from customer.json file in Sync
{
    var customers = fs.readFileSync(file, {encoding: 'utf8'});
    console.log(customers);
    var customers_1 = fs.readFileSync(file);  //without encoding
    console.log(customers_1);
    console.log(customers_1.toString()); 
    console.log('finished reading..............')
}

/*function loadDataAsynch()    //loading the data from customer.json file in ASync
{
    fs.readFile(file, (err,data) => {
        console.log('reading async.....');
        console.log(data.toString());
    });
    console.log('finshed reading asynch !!!!!');
}*/


//createFile();  // 2nd time calling commnet this line

loadData();
//loadDataAsynch();
