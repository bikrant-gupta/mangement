const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var studentDetailSchema = new Schema({
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
		require:true
	},
	email:{
		type:String,
		require:true
	},
	password:{
		type:String
	},
	address:{
		type:String
	},
	state:{
		type:String
	},
	pincode:{
		type:Number
	},
	mobile:{
		type:Number,
		require:true
	},
	father_name:{
		type:String
	},
	mother_name:{
		type:String
	},
	father_mobile:{
		type:Number
	}
});

var StudentDetails = mongoose.model('StudentDetails',studentDetailSchema);

module.exports = StudentDetails;
