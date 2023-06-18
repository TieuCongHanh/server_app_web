var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'); /** truy cập giống như lịch sử và lần sau cứ thế mà hiển thị vô cho mik coi */
var logger = require('morgan');
var bodyParser = require('body-parser')
var myCss = {
  style : fs.readFileSync('/bootstrap-5.2.3-dist/css/bootstrap.min.css','utf8')
};
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var spRouter = require('./routes/sanpham');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sp',spRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404)); /* next gọi đến danh sách tiếp theo....*/
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
