let express = require("express");
let router = express.Router();

let uuid = require("uuid");
let users = require("./Usersdata");
router.get("/students and /professor", (req, res) =>{
  res.json("you are calling get method");
});
router.post("/student and /professor", (req, res) => {    
  const newUser = {
    name: req.body.name,         
  };
 if (!newUser.name || !newUser.email) {
    return res.sendStatus(400);
  }
 res.json("you are calling post method");
});

 

