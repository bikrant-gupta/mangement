const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const FacultyNotification = require('../models/Faculty_notification');
const InstituteNotification = require('../models/Institute_notification');

var router = express.Router()

router.route('/')
.post((req,res,next)=>{
	var msg = req.body.message;
	
})


module.exports = router;