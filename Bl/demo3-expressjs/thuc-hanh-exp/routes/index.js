var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/abc.html', function (req, res) {
  res.render('index', { title: 'Chân gà' });
});


// router.get('/sp/:id', (req, res, next) => {
//   console.log("du lieu gui qua params");
//   console.log(req.params);

//   console.log("du lieu gui len puery: ");
//   console.log(req.query);

//   res.send(req.query);
// });

// router.post('/sp',(req, res, next) =>{
//   console.log("du lieu post");
//   console.log(req.body);

//   res.send(req.body);
// })







module.exports = router;
