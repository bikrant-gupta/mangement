$(document).ready(function(){
	var close_open=0;
	function openmenu(this1){
		$('.option-bar').css('left','0px');
		$('.menu-button').css('left','200px');
		$(this1).html('<i class="fas fa-angle-left"></i>')
		close_open=1;
	}
	function closemenu(this1){
		$('.option-bar').css('left','-250px');
		$('.menu-button').css('left','0px');
		$(this1).html('<i class="fas fa-angle-right"></i>');
		close_open=0;
	}
	$('.menu-button').click(function(){
		if(!close_open){
			openmenu(this);
		}
		else{
			closemenu(this);
		}
		
	})

	$('.menu-btn').click(function(){
		close_all_menu()
		$('.active-menu-btn').removeClass('active-menu-btn')
		$(this).addClass('active-menu-btn');
		$('.visible-menu').removeClass('visible-menu');
		var menu=$(this).attr('for');
		$(`#${menu}`).addClass('visible-menu')
	})
	$('.s-in').click(function(){
		var st=$(this).attr('for');
		$('.visible-student').removeClass('visible-student');
		$(`#${st}`).addClass('visible-student');
	})
	$('.t-in').click(function(){
		var st=$(this).attr('for');
		$('.visible-teacher').removeClass('visible-teacher');
		$(`#${st}`).addClass('visible-teacher');
	})
	$('.student-btn').click(function(){
		// $('.student-sub-btn').fadeToggle({duration:500,queue:true});
		$('.student-sub-btn').slideToggle({duration:100,queue:true});
	})
	$('.teacher-btn').click(function(){
		// $('.student-sub-btn').fadeToggle({duration:500,queue:true});
		$('.teacher-sub-btn').slideToggle({duration:100,queue:true});
	})
	function close_all_menu(){
		$('.student-sub-btn').slideUp({duration:100,queue:true});
		$('.teacher-sub-btn').slideUp({duration:100,queue:true});
	}
//---------------------------------------------------------------------

function openpopup(){
	$('.popup').css('bottom','0px');
}
function pleasewait(val=""){
	$('.popup').html('<div class="loading"><div class="loading-block"></div><div class="loading-margin"></div></div><div class="rotation-text">Please Wait<br>While Loading</div>'+val)
	openpopup();
}
function success(val=""){
	$('.popup').html('<i class="fas fa-check-circle success-tick"> succesfully Sent/updat</i> '+val);
	openpopup();
}
function failed(val=""){
	$('.popup').html('<i class="fas fa-times-circle failed-tick"> Failed to Send/updated</i> '+val);
	openpopup();

}
function closepopup(){
	setTimeout(()=>{
		$('.popup').css('bottom','-1500px');
	},4000)
	
}


// pleasewait





//--------------------------------------------------------
	function getnotification(){
		pleasewait();
		// $('.get-notification').hide();
		$('.notification-name').hide();
		$('.notification-msg').hide();
		$('.notification-time').hide();
		fetch(`http://localhost:3000/institutenotification`,{
			method:'GET'
		})
		.then(res=>res.json())
		.then(data=>{
			// console.log(data.length);
			var n=data.length;
			var s="";
			// console.log(data);
			for(var i=0;i<n;i++){
				s+=`<div class="institute-notification form-margin">
						<div class="notification-name">From:<b>${data[i].adminName}</b>(Admin)</div>
						<div class="notification-msg">${data[i].message}</div>
						<div class="notification-time">${data[i].time}</div>
					</div>
				`;
			}
		$('.get-notification').html(s).fadeIn({duration:300,queue:true});
		closepopup();
		// $('.notification-name').fadeIn({duration:3000,queue:false});
		// $('.notification-msg').fadeIn({duration:600,queue:false});
		// $('.notification-time').fadeIn({duration:600,queue:false});

		})
		.catch(err=>console.log(err))
	}
	getnotification();
	$('.welcome-btn').click(getnotification);






//---------------------------------------------------------
	//push notification
	$('.push-update-btn').click(function(){
		pleasewait();
		var message=$('textarea[name="message"]').val();
		if(!message.length){
			failed('Please fill message to sent');
			setTimeout(() => {
				closepopup();
			}, 1000);
			return;
		}
		console.log(message);
		var reply="Reply from Server";

		fetch('http://localhost:3000/institutenotification',{
			method:'post',
			body:JSON.stringify({
				message:message
			}),
			headers:new Headers({
				'content-type':'application/JSON'
			})
		})
		.then(res=>res.json())
		.then(data=>{
			if(data.success === true){
				$('.server-success-reply').html(data.msg);
				setTimeout(() => {
					closepopup();
				}, 1000);
				success();
				$('textarea[name="message"]').val('');
			}
			else{
				$('.server-failed-reply').html(data.msg);
			}
		})
		.catch(err=>console.log(err));
		
	})
	



//------------------------------------------------------
	// add student
	$('.register-student-btn').click(function(){
		var name=$('input[name="name"]','#add-student').val();
		var dob=$("input[name='birth-date']",'#add-student').val();
		var gender = $("input[name='gender']:checked",'#add-student').val();
		var profession = $("select[name='profession']",'#add-student').val();
		var course =$("select[name='course']",'#add-student').val();
		var dept = $("select[name='department']",'#add-student').val();
		var mail = $("input[name='email']",'#add-student').val();
		var mobile = $("input[name='mobile']",'#add-student').val();
		var error="";
		if(name.length==0){
			error+="Please Fill Your <b>Name</b>";
		}
		if(!dob.length){
			error+="<br>Please Fill Your <b>Date of Birth</b>";
		}
		if(!gender){
			error+="<br>Please choose your <b>Gender</b> value";
		}
		if(!profession || profession=="notchoosen"){
			error+="<br>Please choose your <b>You are</b> value";
		}
		if(!course || course =="notchoosen"){
			error+="<br>Please choose your <b>Course</b> value";
		}
		if(!dept || dept=="notchoosen"){
			error+="<br>Please choose your <b>Department</b> value";
		}
		if(!mail.length){
			error+="<br>Please fill your <b>Email ID</b>";
		}
		if(!mobile || mobile.length!=10){
			error+="<br>Please fill your <b>Mobile Number</b> Correctly";
		}
		if(error.length)$('.register-error').html(error).show();
		else{
			$('.register-error').hide();
			fetch(`http://localhost:3000/registeracademic`,{
				method:'post',
				body:JSON.stringify({
					name:name,
					dob:dob,
					gender:gender,
					profession:profession,
					dept:dept,
					course:course,
					mail:mail,
					mobile:mobile,
				}),
				headers: new Headers({
					'Content-Type':'application/json'
				})
			})
			.then(res=>res.json())
			.then(data=>console.log(data))
			.catch(err=>console.log(err))

		}
		// console.log(name,dob,gender,profession,course,dept,reg,mail,mobile);
		// console.log(sname);

	})

	// delete student
	$('.delete-std-btn-fetch-detail').click(()=>{
		console.log('fetch');

		var dept=$('select[name="department"]','#delete-student').val();
		var by = $('select[name="delete-by"]','#delete-student').val();
		var val = $('input[name="delete-id"]','#delete-student').val();
		s="";
		if(dept === 'notchoosen'){
			s+='<br>Please Choose<b>Department</b>';
		}
		if(!val){
			s+='<br>Please Fill <b>Registration/EmailID</b>';
		}
		$('.error-message').html(s).show();
		// fetch('http://localhost:3000/getstudentdetail',{
		// 	method:'POST',
		// 	body:JSON.stringify({
		// 		dept:dept,
		// 		by:by,
		// 		value:val
		// 	}),
		// 	headers:new Headers({
		// 		'content-type':'application/json'
		// 	})

		// })
		// .then(res=>ser.json())
		// .then(data=>console.log(data))
		// .catch(err=>console.log(err))


		console.log(dept,by,val);

	})


	// edit student


	// get student


//----------------------------------------------------------


	// add teacher
	
	$('.register-teacher-btn').click(function(){

		var name=$('input[name="name"]','#add-teacher').val();
		var dob=$("input[name='birth-date']",'#add-teacher').val();
		var gender = $("input[name='gender']:checked",'#add-teacher').val();
		var profession = $("select[name='profession']",'#add-teacher').val();
		var dept = $("select[name='department']",'#add-teacher').val();
		var mail = $("input[name='email']",'#add-teacher').val();
		var mobile = $("input[name='mobile']",'#add-teacher').val();
		var error="";
		if(name.length==0){
			error+="Please Fill Your <b>Name</b>";
		}
		if(!dob.length){
			error+="<br>Please Fill Your <b>Date of Birth</b>";
		}
		if(!gender){
			error+="<br>Please choose your <b>Gender</b> value";
		}
		if(!profession || profession=="notchoosen"){
			error+="<br>Please choose your <b>You are</b> value";
		}
		if(!course || course =="notchoosen"){
			error+="<br>Please choose your <b>Course</b> value";
		}
		if(!dept || dept=="notchoosen"){
			error+="<br>Please choose your <b>Department</b> value";
		}
		if(!reg.length){
			error+="<br>Please fill your <b>Registration Number / FacultyID</b>";
		}
		if(!mail.length){
			error+="<br>Please fill your <b>Email ID</b>";
		}
		if(!mobile || mobile.length!=10){
			error+="<br>Please fill your <b>Mobile Number</b> Correctly";
		}
		if(error.length)$('.register-error').html(error).show();
		else{
			$('.register-error').hide();
			fetch(`http://localhost:3000/registeracademic`,{
				method:'post',
				body:JSON.stringify({
					name:name,
					dob:dob,
					gender:gender,
					profession:profession,
					dept:dept,
					mail:mail,
					mobile:mobile,
				}),
				headers: new Headers({
					'Content-Type':'application/json'
				})
			})
			.then(res=>res.json())
			.then(data=>{
				console.log(data);
			})
			.catch(err=>console.log(err))

		}
	})


	// delete teacher


	// edit teacher


	// get teacher


//---------------------------------------------------------



})