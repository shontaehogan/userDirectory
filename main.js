//this creates the express app and tells NODE to use it
const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const app = express();
const data = require('./data.js');


//this sets up mustache to run as an engine for our code
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views')

// this tells the app to use the files in the PUBLIC folder
app.use(express.static('public'));

//this sends my INDEX.HTML page to the browser
app.get('/', function(req, res) {
    res.render('index.mustache', {users:data.users});
});

app.get('/:indexNum/', function (req, res) {

// create variable for index
let i = parseInt(req.params.indexNum) - 1;
// let user = data.users.find(function(user) {return user.username == req.params.username});
// for (let i = 0; i < data.users.length; i++) {

res.render('user.mustache', data. users[i]);

});
//
//
//     break;
//   }
// }
// // res.render('robotItem', robotItem);

//this tells the browser which PORT to use
app.listen(3000, function () {
  console.log('Successful!')
})
