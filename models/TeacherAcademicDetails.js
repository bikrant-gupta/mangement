const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var teacherAcademicDetailsSchema = new Schema({
	name:{
		type:String,
		require:true
	},
	dob:{
		type:Date,
		require:true
	},
	gender:{
		type:String,
		require:true
	},
	profession:{
		type:String,
		require:true
	},
	department:{
		type:String,
		require:true
	},
	facultyID:{
		type:String,
		require:true,
		unique:true
	},
	email:{
		type:String,
		require:true,
		unique:true
	},
	mobile:{
		type:Number,
		require:true
	},
	joinDate:{
		type:Date,
		default:Date.now
	}
})

var TeacherAcademicDetails = mongoose.model('TeacherAcademicDetails',teacherAcademicDetailsSchema);
module.exports = TeacherAcademicDetails;