var express = require('express');
var router = express.Router();

var homeCtrl=require('../controllers/home.controller')

router.get('/',homeCtrl.home);

module.exports = router;
