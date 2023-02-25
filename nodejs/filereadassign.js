const fs = require('fs');
var file = 'employee.json';
function createFile() {
    fs.open(file,'w',(err) =>
    {
        console.log(err);
    });
   }
   /*function loadDataAsynch()    //loading the data from employee.json file in ASync
{
    fs.readFile(file, (err,data) => {
        console.log('reading async.....');
        console.log(data.toString());
    });
    console.log('finshed reading asynch !!!!!');
}*/
function loadData()  //loading the data from employee.json file in Sync
{
    
    var employee_1 = fs.readFileSync(file);  //without encoding
    console.log(employee_1);
    console.log(employee_1.toString()); 

    var employee = fs.readFileSync(file, {encoding: 'utf8'});//with encoding
    console.log(employee);
    console.log('finished reading..............')
}
//createFile();  


loadData();
//loadDataAsynch();
