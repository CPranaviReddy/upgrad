const fs= require('fs');
const zlib = require('zlib');

var read = fs.createReadStream('input.txt');
var write = fs.createWriteStream('output.txt.gz'); // this is the compressed format file
var gzip = zlib.createGzip(); // create the zipped module

/*
read.pipe(gzip).pipe(write).on('finish', ()=>
{
  console.log('finished compressing');
  write.end();
  write.close();
})
*/


//unzipping the data back
var gunzip = zlib.createGunzip();
var rs = fs.createReadStream('output.txt.gz'); // ---> look into this during WINRAR uncompressing back

rs.pipe(gunzip).pipe(process.stdout).on('error', (err)=>{
  console.log('after uncompressing');
  console.log(err);
})
