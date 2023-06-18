var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user.controller');
var check_login = require('../middleware/check_login');
// viết middleware chung cho tất cả các routes trong file này 
router.use( (req, res, next) =>{
console.log("--- dòng này là middleware -----");
next();
})




/* GET users listing. */ //    /users
router.get('/',check_login.yeu_cau_dang_nhap, function(req, res, next) {

  // truy cập vào sesiton
  let u = req.session.userLogin;
  res.send(u);
});


router.get('/login',userCtrl.Login);
router.get('/login',userCtrl.Login);

router.get('/reg',userCtrl.Reg);
router.get('/reg',userCtrl.Reg);

router.get('/logout',userCtrl.Logout );

// === demo upload 
var multer = require('multer');
var uploader = multer({dest: './tml'});

router.get('/demo-upload', userCtrl.demoUpload);
router.post('/demo-upload', uploader.single("file_anh") , userCtrl.demoUpload);

module.exports = router;
