/*const fs = require('fs');//step1
var readstream = fs.createReadStream('input.txt');//step:2
var contents ="";
readstream.on('data',(data)=>{        //step3: reading the data from input.txt
    contents+=data;  //contents= contents+data

})
readstream.on('end',()=>{           //step4: finished the reading
    console.log('finished reading');
    console.log(contents);

})
readstream.on('error',()=>{
    console.log(error);
})*/

const fs = require('fs');  // Step :1
var readstream = fs.createReadStream('input.txt');  //Step: 2
var contents = "";
readstream.on('data', (data)=>{     //Step : 3 = reading the data from the input.txt file
    contents +=data  // contents = contents + data
})
readstream.on('end', ()=>{          //Step :4 = finished the reading
    console.log('finshed reading')
    console.log(contents);
})
readstream.on('error', (err)=>{   
    console.log(err);
})
