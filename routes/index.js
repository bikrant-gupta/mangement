var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/')
.get((req, res, next)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type','text/html');
  	res.render('admin')
})
.post((req, res, next)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type','text/html');
	// res.json({"message":"Welcome"});
  	res.render('admin', { title: 'Express' });
});

router.route('/admin')
.get((req, res, next)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type','text/html');
  	res.render('admin')
})
router.route('/student')
.get((req, res, next)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type','text/html');
  	res.render('student')
})
router.route('/teacher')
.get((req, res, next)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type','text/html');
  	res.render('teacher')
})
module.exports = router;
