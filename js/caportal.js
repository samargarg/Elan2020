




function validateForm(e){
    document.getElementById('submit_btn').disabled=true;
    var form = document.forms["form"];
    if(!form['name'].value.trim().length){
        //error
        document.getElementById("help_name").innerHTML="Please Enter your Name";
        document.getElementById('submit_btn').disabled=false;
        return;
        
    }else{
        document.getElementById("help_name").innerHTML="";
    }

    if(form['password'].value !== form['password'].value){
        //error
        document.getElementById("help_password").innerHTML="Passwords dont match";
        document.getElementById('submit_btn').disabled=false;
        return;
        
    }else{
        document.getElementById("help_password").innerHTML="";
    }

    if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(form['email'].value)){
        //error
        document.getElementById("help_email").innerHTML="Please Enter a valid Email";
        document.getElementById('submit_btn').disabled=false;
        return;
    }else{
        document.getElementById("help_email").innerHTML="";
    }

    if(!/^[6,7,8,9]\d{9}$/.test(form['phone'].value)){
        //error
        document.getElementById("help_phone").innerHTML="Please Enter a valid Phone Number";
        document.getElementById('submit_btn').disabled=false;
        return;
    }else{
        document.getElementById("help_phone").innerHTML="";
    }

    if(form['institute'].value==""){
        //error
        document.getElementById("help_institute").innerHTML="Please Enter a valid Phone Number";
        document.getElementById('submit_btn').disabled=false;
        return;
    }else{
        document.getElementById("help_institute").innerHTML="";
    }

    if(!form['insta'].value.trim().length && !form['fb'].value.trim().length){
        //error
        document.getElementById("help_insta").innerHTML="Please Enter either Instagram or Facebook ID";
        document.getElementById('submit_btn').disabled=false;
        return;
    }else{
        document.getElementById("help_insta").innerHTML="";
    }

    const url = "https://elancaportal.herokuapp.com/caportal/register/";
    const body = {
        name:form['name'].value,
        email:form['email'].value,
        password:form['password'].value,
        institute:form['institute'].value,
        phone:form['phone'].value,
        instagram:form['insta'].value,
        facebook:form['fb'].value
    };

    fetch(url,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            "Origin": "http://127.0.0.1",
            'Accept':'application/json'
        },
        body:JSON.stringify(body)
    }).then(res => {
        console.log(res);
        if(res.status==201){
            console.log("User successfully registered")
            $('#modal_title').html("Registration Successful");
            $('#modal_title').css("color","green");
            $('#modal_body').html("Thank you for registering for Campus Ambassador Program! You will be mailed the details for CA portal in a few days.<br/><br/>You will now be redirected to the homepage.") ;
        }else{
            console.log('error');
            $('#modal_title').html("Registration Unsuccessful");
            $('#modal_title').css("color","red");
            $('#modal_body').html("An error occured while registering you. Please try again after some time.<br/><br/>You will now be redirected to the homepage.");
        }

        $('#submit_modal').modal({
            backdrop:'static',
            show:true
        });
        document.getElementById('submit_btn').disabled=false;
        setTimeout(()=>{
            window.location.href= "https://elan.org.in";
        },5000);
    }).then(result => {
        console.log(result);
    }).then(err => {
        console.log(err);
    })



}