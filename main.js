//this creates the express app and tells NODE to use it
const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const app = express();
const data = require('./data.js');


//this sets up mustache to run as an engine for our code
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

// this tells the app to use the files in the PUBLIC folder
app.use(express.static('public'));


// render index page and get variable
app.get('/', function(req, res){
  res.render('index', data);
  console.log(data);
})

// gets and render robot to userInfo.mustache page
app.get('/user/:id', function(req, res){
  let robot = data.users.find(function(item){
    return item.id == req.params.id;
  });
  res.render('userInfo', robot);
});


//this tells the browser which PORT to use
app.listen(3000, function () {
  console.log('Successful!')
});
