const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var instituteNotificationSchema = new Schema({
	adminName:{
		type:String,
		require:true
	},
	adminID:{
		type:String,
		require:true
	},
	message:{
		type:String,
		require:true
	},
	time:{
		type:Date,
		default:Date.now
	}
})
var InstituteNotification = mongoose.model('InstituteNotification',instituteNotificationSchema);
module.exports = InstituteNotification;