const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var studentAcademicSchema = new Schema({
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
	course:{
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
	reg_num:{
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
	year:{
		type:Number,
		default:1
	},
	semester:{
		type:Number,
		default:1
	}
});

var StudentAcademicDetail = mongoose.model('StudentAcademicDetail',studentAcademicSchema);
module.exports = StudentAcademicDetail;