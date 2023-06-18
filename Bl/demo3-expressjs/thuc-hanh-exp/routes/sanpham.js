var express = require('express');
var router = express.Router();
var spController = require('../controllers/sanpham.controllers');

// trang danh sach
router.get('/', spController.getList);

router.get('/add', spController.addProduct);
  
router.post('/add', spController.addProduct );

// can co export
module.exports = router;