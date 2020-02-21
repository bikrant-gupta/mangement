const express=require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var facultyNotificationSchema = new Schema({
	facultyID:{
		type:String,
		require:true
	},
	message:{
		type:String,
		require:true
	},
	courseID:{
		type:String,
		require:true
	},
	time:{
		type:Date,
		default:Date.now
	}
});

var FacultyNotification = mongoose.model('FacultyNotification',facultyNotificationSchema);
module.exports = FacultyNotification; 