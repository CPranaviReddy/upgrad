const fs = require('fs');

var file = 'employee.json'

function createFile() {
 fs.open(file,'w',(err) =>
 {
     console.log(err);
 });
}

function loadDataAsynch()
{
    fs.readFile(file, (err,data) => {
        console.log('reading async.....');
        console.log(data.toString());
        // adding the below code after running the main.js
        fs.writeFile('copy.json',data.toString(),(err)=>{
            if(err)
            console.log(err);
            else
            console.log('written the data....');
        })
    });
    // till here
    console.log('finished reading asynch !!!!!');
}
loadDataAsynch()


//--------------- writing data into file --------------//
function loadData()
{
    console.log('we are starting with loadData() method....');
    var employee = fs.readFileSync(file, {encoding: 'utf8'});
    return JSON.parse(employee).toString()
}

function writeData(name, city){
    console.log('we are starting with writeData() method....');
    var employee= loadData();
    employee.push({
        "name": name,
        "city": city
    });
    fs.writeFileSync(file,JSON.stringify(employee));
}

module.exports={
    load: loadData,
    writeCustomer: writeData
}

