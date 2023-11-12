var express = require('express');
var router = express.Router();
let users = [];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Week3' });
});

router.post('/todo', function(req, res) {
  //How to find an index of an element with specific property is based on this: https://stackoverflow.com/questions/8217419/how-to-determine-if-a-javascript-array-contains-an-object-with-an-attribute-that
  let index= users.findIndex(u => u.name === req.body.name)
  
  if (index == -1) {
    let user = {"name": req.body.name, "todos": [req.body.todos] }
    users.push(user);
    res.send({"text": "User added"});
  } else {
    let foundUser = users[index];
    foundUser.todos.push(req.body.todos);
    res.send({"text": "Todo added"});
  }
  console.log(users);
})
module.exports = router;
