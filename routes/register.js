const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const StudentPersonalDetails = require('../models/StudentPersonalDetails');
const StudentAcademicDetail = require('../models/StudentAcademicDetail');
var router = express.Router();

router.route('/')
.get((req,res,next)=>{
	res.render('register');
})
.post((req,res,next)=>{
	var name = req.body.name;
	var dob = req.body.dob;
	var gender = req.body.gender;
	var profession = req.body.profession;
	var dept = req.body.dept;
	var course = req.body.course;
	var userid = req.body.userid;
	var email=req.body.email;
	var password = req.body.password;
	var repassword = req.body.repassword;
	var address = req.body.address;
	var state = req.body.state;
	var pincode = req.body.pincode;
	var mobile = req.body.mobile;
	var fathername = req.body.fathername;
	var mothername = req.body.mothername;
	var fatherphone = req.body.fatherphone;

	var data = {
		password:password,
		address:address,
		state:state,
		pincode:pincode,
		fatherName:fathername,
		motherName:mothername,
		fatherMobile:fatherphone,
		regNum:userid
	}
	var error="error message";
	var warning="warning message";
	var success="success message"
	res.render('register',{
		error,
		warning,
		success,
		name,
		dob,
		gender,
		profession,
		dept,
		course,
		userid,
		email,
		password,
		repassword,
		address,
		pincode,
		state,
		mobile,
		fathername,
		mothername,
		fatherphone
	})

	
	// StudentPersonalDetails.create(data)
	// .then((detail)=>{
	// 	console.log(detail);
	// 	res.statusCode = 200;
	// 	res.setHeader('Content-Type','application/json');
	// 	res.json({"response":"ThankYou"});
	// })
	// .catch((err)=>next(err));
},(err)=>console.log(err));

module.exports = router;