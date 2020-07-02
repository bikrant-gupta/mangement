var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var bodyParser = require('body-parser');
var ejs = require('ejs');
var ejslayout = require('express-ejs-layouts');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var registerAdminRouter = require('./routes/adminregister');
var instituteNotificationRouter = require('./routes/institutenotification');
// var teacherNotificationRouter = require('./routes/teachernotification');

const mongoose = require('mongoose');

const StudentPersonalDetails = require('./models/StudentPersonalDetails');
const StudentAcademicDetail = require('./models/StudentAcademicDetail');
const TeacherPersonalDetails = require('./models/TeacherPersonalDetails');
const FacultyNotification = require('./models/Faculty_notification');
const Courses = require('./models/Courses');
const AdminDetails = require('./models/AdminDetails');
const InstituteNotification = require('./models/InstituteNotification')
const url = 'mongodb+srv://bikrant1999:password@cluster0-pzd91.mongodb.net/test?retryWrites=true&w=majority';
const connect = mongoose.connect(url, { useNewUrlParser: true });

connect.then((db)=>{
	console.log('connected to server successfully');
},(err)=>{console.log('<BIK> Database Error:',err)});

var app = express();
app.use(ejslayout);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('trust proxy',1);

app.use(express.static('public'))


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('ADMIN-IS-BIKRANT'));
// var MemoryStore = session.MemoryStore;s
app.use(session({
	name:'session-id',
	secret: 'ADMIN-IS-BIKRANT',
	saveUninitialized: false,
	resave:false,
	store:new FileStore(),
	cookie:{secure:true}
}));



	


app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/register',registerRouter);
app.use('/login',loginRouter);
app.use('/users', usersRouter);
app.use('/registeradmin',registerAdminRouter);
app.use('/institutenotification',instituteNotificationRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
