const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get("/", function(req,res){  

  res.render("home");
});

app.get("/about", function(req,res){  

  res.render("about");
});

app.get("/login", function(req,res){  

  res.render("login");
});

app.get("/paypal", function(req,res){  

  res.render("paypal");
});



// // login route
// app.post("/login", function (req, res){
//   const { username, password } = req.body;
//     if(username, password){
//       res.redirect("/")
//     };
   

//   if(!username || !password) {
//     res.redirect("/about")
//   }
// });

app.listen(process.env.PORT || 3000, function() {
  console.log('Server is running on Port 3000');
});
