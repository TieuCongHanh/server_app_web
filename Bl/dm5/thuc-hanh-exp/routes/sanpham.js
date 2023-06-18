var express = require('express');
var router = express.Router();
var spCtrl = require('../controllers/sanpham.controllers');

router.get('/', spCtrl.list);

router.get('/add', spCtrl.add);

router.post('/add', spCtrl.add);

router.get('/delete', spCtrl.delete);

router.delete('/delete', spCtrl.delete);

router.get('/update', spCtrl.update);

router.put('/update', spCtrl.update);

module.exports = router;
