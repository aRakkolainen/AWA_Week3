var express = require('express');
var router = express.Router();
let users = [];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Week3' });
});
router.post('/todo', function(req, res) {
  //console.log(req.body.name)
  
  let user = {"name": req.body.name, "todos": [req.body.todos] }
  users.push(user)
  
})

module.exports = router;
