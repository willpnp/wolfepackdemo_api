var express = require('express');
var path = require('path');
//var cors = require('cors');
//var hike = require('./routes/hike');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var index = require('./routes/index');
//var users = require('./routes/users');
var login = require('./routes/loginroutes');

var app = express();
//app.get('/hikes', hike.index);
//app.post('/add_hike',hike.add_hike);
//app.post('/register',login.register);
//app.post('/login',login.login);

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', index);
//app.use('/users', users);

//app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //intercepts OPTIONS method
    if ('OPTIONS' === req.method) {
      //respond with 200
      res.send(200);
    }
    else {
    //move on
      next();
    }});


// catch 404 and forward to error handler
/*
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
*/

var router = express.Router();
 
// test route
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to Wolfe Pack test APIs' });
});
 
//route to handle user registration
router.post('/register',login.register);
router.post('/login',login.login)
app.use('/api', router);
app.listen(5000); 

module.exports = app;
