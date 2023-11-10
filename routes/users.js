var express = require('express');
var router = express.Router();
let users = [];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});
/* POST Users to server */
router.post('/todo', function(req, res) {
  console.log(req.body)
  
  let user = {"name": req.body.name, "todos": [req.body.todos] }
  users.push(user)
  
})
module.exports = router;
