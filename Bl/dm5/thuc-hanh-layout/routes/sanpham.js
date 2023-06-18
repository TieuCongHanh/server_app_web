var express=require('express');
var router=express.Router();

var sanphamCtrl=require('../controllers/sanpham.controller');

router.get('/',sanphamCtrl.list);

router.get('/add',sanphamCtrl.add);
router.post('/add',sanphamCtrl.add);

router.get('/edit/:idsp',sanphamCtrl.edit);
router.post('/edit/:idsp',sanphamCtrl.edit);



module.exports=router;