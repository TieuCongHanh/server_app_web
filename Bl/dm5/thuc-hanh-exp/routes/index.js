var express = require('express');
var router = express.Router();

var homeCtrl = require('../controllers/home.controllers');

router.get('/', homeCtrl.index);



/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });



module.exports = router;

