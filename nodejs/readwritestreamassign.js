//write stream
const fs = require('fs');
var writestream = fs.createWriteStream('countries.txt');
var data = 'India,UK,China,Japan,USA';
writestream.write(data,'utf-8')  //data
writestream.on('error',()=>{    //error
console.log(err)
})
writestream.end();              //end
writestream.on('finish',() =>   //finish
{
console.log('finished reading');
})
writestream.close(); 



//read stream

var readstream = fs.createReadStream('countries.txt');  
var contents = "";

readstream.on('data', (data)=>{     //data
    contents +=data  
})

readstream.on('end', ()=>{          //end
    console.log('finshed reading')
    console.log(contents);
})
readstream.on('finish',() =>         //finish
{
console.log('finished reading');
})

readstream.on('error', (err)=>{   //error
    console.log(err);
})
