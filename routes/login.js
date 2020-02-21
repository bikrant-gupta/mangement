const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const StudentPersonalDetails = require('../models/StudentPersonalDetails');
const AdminDetails = require('../models/AdminDetails');
const TeacherPersonalDetails = require('../models/TeacherPersonalDetails');

var router = express.Router();

router.route('/')
.get((req,res,next)=>{
	res.render(`login`);
})
.post((req,res,next)=>{
	console.log('Hik',req.body);
	var warning='Not yet Developed.. Will developed soon :)';
	var {userid,password} = req.body;
	res.render('login',{
		warning,
		userid,
		password
	})

},(err)=>console.log(err))

module.exports = router;