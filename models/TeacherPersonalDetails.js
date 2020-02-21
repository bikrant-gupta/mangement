const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var teacherPersonalDetailSchema = new Schema({
	facultyID:{
		type:String,
		require:true,
		unique:true
	},
	address:{
		type:String,
		require:true
	},
	state:{
		type:String,
		require:true
	},
	pincode:{
		type:Number,
		require:true
	},
	mobile:{
		type:Number,
		require:true
	},
	fatherName:{
		type:String,
		require:true
	},
	motherName:{
		type:String,
		require:true
	},
	fatherMobile:{
		type:String,
		require:true
	},
	password:{
		type:String,
		require:true
	}
});

var teacherPersonalDetail = mongoose.model('teacherPersonalDetail',teacherPersonalDetailSchema);
module.exports = teacherPersonalDetail;
