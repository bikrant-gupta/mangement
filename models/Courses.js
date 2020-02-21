const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var courseSchema=new Schema({
	courseDepartment:{
		type:String,
		require:true
	},
	courseName:{
		type:String,
		require:true
	},
	courseID:{
		type:String,
		require:true,
		unique:true
	},
	slot:{
		type:String,
		require:true
	}
	
});

var Course = mongoose.model('Course',courseSchema);
module.exports = Course;