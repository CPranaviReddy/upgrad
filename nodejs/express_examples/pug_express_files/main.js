const express =require('express')
const routeExample = require('./router-example')
const app = express()

app.use('/',routeExample); //use routeExample.js to handle routes starting with '/'
app.use('/cats',routeExample); //use routeExample.js to handle routes starting with '/cats'
app.use('/rabbits',routeExample); //use routeExample.js to handle routes starting with '/rabbits'

app.listen(3000, () => console.log("running main.js on port 3000......."));