
let fs = require('fs');

var writer = fs.createWriteStream('test_gfg.txt') 

var data = 'India,UK,China,Japan,USA';

writer.write(data);