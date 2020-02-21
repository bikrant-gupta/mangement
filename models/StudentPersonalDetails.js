const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var studentPersonalSchema = new Schema({
	regNum:{
		type:String,
		require:true
	},
	password:{
		type:String,
		require:true
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
	}
});

var StudentPersonalDetails = mongoose.model('StudentPersonalDetails',studentPersonalSchema);
module.exports = StudentPersonalDetails;