const express = require('express')
const router= express.Router()

router.route('/:username/:id')   // we have tow paramters here = username + id
    .get((req,res)=>{
        console.log(req.params.id);   //we can access the URL dunamic paramters inside using the 'params'
        console.log(req.params.username); 
    res.send(' welcome to page, ' + req.params.username)
})
    .post((req,res)=>{
    console.log(req.params.username);
    res.send('data received ')
})

module.exports = router;