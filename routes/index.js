var express = require('express');
var router = express.Router();
let users = [];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Week3' });
});





router.post('/todo', function(req, res) {
  //How to find an index of an element with specific property is based on this: https://stackoverflow.com/questions/8217419/how-to-determine-if-a-javascript-array-contains-an-object-with-an-attribute-that
  let temp = req.body.name; 
  let newUser = temp.charAt(0).toUpperCase() + temp.slice(1);
  let index= users.findIndex(u => u.name === newUser)
  
  if (index == -1) {
    let user = {"name": newUser, "todos": [req.body.todos] }
    users.push(user);
    res.send("User added");
  } else {
    let foundUser = users[index];
    foundUser.todos.push(req.body.todos);
    res.send("Todo added");
  }
})

router.get('/user/:id', function(req, res) {
  let temp = req.params.id; 
  // Capitalizing the first letter of a string: https://flexiple.com/javascript/javascript-capitalize-first-letter
  let searchedUser = temp.charAt(0).toUpperCase() + temp.slice(1);
  let i= users.findIndex(u => u.name === searchedUser);
  //User was not found!
  if (i == -1) {
    res.send({"result": "User not found."});
  } else {
    //User is found 
    res.send({"result": users[i]});
  }
})

router.delete("/user/:id", function(req, res) {
  let temp = req.params.id; 
  // Capitalizing the first letter of a string: https://flexiple.com/javascript/javascript-capitalize-first-letter
  let searchedUser = temp.charAt(0).toUpperCase() + temp.slice(1);
  let i= users.findIndex(u => u.name === searchedUser);
  //User was not found!
  if (i == -1) {
    res.send("User not found.");
  } else {
    //User is found and it could be deleted
    //How to delete specific item at index: https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
    users.splice(i, 1);
    res.send("User deleted");
  }

}) 
module.exports = router;
