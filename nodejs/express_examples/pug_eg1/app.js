const express = require('express');
const app = express();

app.set('view engine', 'pug');     // create /set the pug engine
app.set('views', './views/')      // we inform the pug engine to locate all pug templates

const names = ['John Doe', 'Roger Roe', 'Paul Smith', 'Rebecca Jordan'];

app.get('/', (req,res) => {
//res.render('index')        // here the pug engine will try to convert your template to actual HTML file. static data in the pug file
res.render('sample', { title: 'Hey', message: 'Hello there!', 'names': names })  // dynamic data
});

app.listen(3002, () => console.log('Listening on port 3002'))
