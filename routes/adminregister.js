const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const StudentPersonalDetails = require('../models/StudentPersonalDetails');
const StudentAcademicDetail = require('../models/StudentAcademicDetail');
const TeacherPersonalDetails = require('../models/TeacherPersonalDetails');
const FacultyNotification = require('../models/Faculty_notification');
const Courses = require('../models/Courses');
const AdminDetails = require('../models/AdminDetails');
const InstituteNotification = require('../models/InstituteNotification');
var router = express.Router();

router.route('/')
.get((req,res,next)=>{
	res.statusCode = 404;
	res.setHeader('Content-Type','text/html');
	res.render('error');
})
.post((req,res,next)=>{
	var name = req.body.name;
	var mail=req.body.mail;
	var pass = req.body.pass;
	var adminID = req.body.adminid;
	var mobile = req.body.mobile;
	res.render('error',{
		error:"You are not allowed :("
	})

},(err)=>console.log(err));

module.exports = router;