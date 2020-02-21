const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
var InstituteNotification =  require('../models/InstituteNotification');
const AdminDetails = require('../models/AdminDetails');


router.route('/')
.get((req,res,next)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type','application/json');

	InstituteNotification.find({},'adminID message time adminName').sort({"_id":-1}).limit(10)
	.then(data=>{
		res.json(data);
	})
	.catch(err=>console.log(err))
	
	
	
	
	
	// function(err,data){
	// 	if(err) throw err;
	// 	res.statusCode = 200;
	// 	res.setHeader('Content-Type','application/json');
	// 	res.json(data);
	// })
})
.post((req,res,next)=>{
	var message = req.body.message;
	AdminDetails.findOne({'adminID':'bikrantadmin1999'},'name',function(err,data){
		if(err => next(err));
		if(data){
			var name = data.name;
			InstituteNotification.create({
				adminName:name,
				adminID:'bikrantadmin1999',
				message:message
			})
			.then((detail)=>{
				res.statusCode = 200;
				res.setHeader('Content-Type','application/json');
				res.json({"success":true,"msg":"Successfully sent"});
			})
			.catch(err=>next(err));
		}
		else{
			res.statusCode = 200;
			res.setHeader('Content-Type','application/json');
			res.json({"success":false,"msg":"Failed"});
		}
	})

	
},(err)=>console.log(err))


module.exports = router;