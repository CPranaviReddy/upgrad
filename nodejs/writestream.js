// const fs = require('fs');
const fs = require('fs');
var writestream = fs.createWriteStream('output.txt');

var data = 'we are learning Node JS||\n'
for(var i=0; i<10;i++)
{
    writestream.write(data,'utf-8')

}
writestream.end();  // no data is to be added more and then it will call the finish method internally
writestream.on('finish',() =>
{
console.log('finished reading');

})
writestream.on('error',()=>{
    console.log(err)
})
writestream.close(); // this will be called to close my string permanently



/* test 
//write stream
const fs = require('fs');
var writestream = fs.createWriteStream('countries.txt');
var data = 'India,UK,China,Japan,USA';
writestream.write=(data,'utf-8')  //data
writestream.on('error',()=>{    //error
    console.log(err)
})
writestream.end();              //end
writestream.on('finish',() =>   //finish
{
console.log('finished reading');
})
writestream.close(); 

*/

