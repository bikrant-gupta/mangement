const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var adminDetailSchema = new Schema({
	name:{
		type:String,
		require:true
	},
	mobile:{
		type:Number,
		require:true
	},
	email:{
		type:String,
		require:true
	},
	password:{
		type:String,
		require:true
	},
	adminID:{
		type:String,
		require:true,
		unique:true
	}
	
});

var AdminDetails = mongoose.model('AdminDetails',adminDetailSchema);
module.exports = AdminDetails;