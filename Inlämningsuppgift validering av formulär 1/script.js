$().ready(function() {

    $('.text-b input').on('focus', function(){
        $(this).addClass('focus');
    });
    
    $('.text-b input').on('blur', function(){
        if($(this).val() == '')
        $(this).removeClass('focus');
    });

    function isEmpty(id) {
        if($(id).val() === '') {
            $(id).addClass('is-invalid')

            $(id).focus();
            return(true)
        } else {
            $(id).removeClass('is-invalid')
            $(id).addClass('is-valid')
            return(false)
        }
    }
    
    function checkFirstName() {
        if($('#firstName').val().length > 1) {
            $('#firstName').addClass('is-valid')

            $('#firstName').focus();
            return (true);
        } else {
            $('#firstName').removeClass('is-valid')
            $('#firstName').addClass('is-invalid')
            return (false);
        }
    }

    function checkLastName() {
        if($('#lastName').val().length > 1) {
            $('#lastName').addClass('is-valid')

            $('#lastName').focus();
            return(true)
        } else {
            $('#lastName').removeClass('is-valid')
            $('#lastName').addClass('is-invalid')
            return(false)
        }
    }

    function checkStreetAddress() {
        if($('#streetAddress').val().length > 4) {
            $('#streetAddress').addClass('is-valid')

            $('#streetAddress').focus();
            return(true)
        } else {
            $('#streetAddress').removeClass('is-valid')
            $('#streetAddress').addClass('is-invalid')
            return(false)
        }
    }

    function checkZipcode() {
        if($('#zipcode').val().length > 4) {
            $('#zipcode').addClass('is-valid')

            $('#zipcode').focus();
            return(true)
        } else {
            $('#zipcode').removeClass('is-valid')
            $('#zipcode').addClass('is-invalid')
            return(false)
        }
    }

    function checkCity() {
        if($('#city').val().length > 2) {
            $('#city').addClass('is-valid')

            $('#city').focus();
            return(true)
        } else {
            $('#city').removeClass('is-valid')
            $('#city').addClass('is-invalid')
            return(false)
        }
    }

    function checkEmail(){
        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if($('#email').val().match(regex)) {
            $('#email').addClass('is-valid')

            $('#email').focus();
            return(true)
        } else {
            $('#email').removeClass('is-valid')
            $('#email').addClass('is-invalid')
            return(false)
        }
    }

    function checkPassword(){
        let passCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if($('#password').val() === $('#confirmPassword').val() && $('#password').val().match(passCheck) && $('#confirmPassword').val().match(passCheck)){   
            $('#password').removeClass('is-invalid')
            $('#password').addClass('is-valid')
            $('#confirmPassword').removeClass('is-invalid')
            $('#confirmPassword').addClass('is-valid') 
            return (true);  
        }  else {  
            $('#password').removeClass('is-valid') 
            $('#password').addClass('is-invalid')
            $('#confirmPassword').removeClass('is-valid')
            $('#confirmPassword').addClass('is-invalid')
            return (false);  
        }        
    }
    
    function checkLoginPassword() {
        let passCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if($('#loginPassword').val().match(passCheck)){
            $('#loginPassword').addClass('is-valid')

            $('#loginPassword').focus();
            return(true);
        } else {
            $('#loginPassword').removeClass('is-valid')
            $('#loginPassword').addClass('is-invalid')
            return(false);
        }
    }

    $('input').keyup(function(e) {
        let id = "#" + e.currentTarget.id
        isEmpty(id);
        switch (e.target.id){
            case 'firstName':
            checkFirstName();
            break;
            case 'lastName':
            checkLastName();
            break;
            case 'streetAddress':
            checkStreetAddress();
            break;
            case 'zipcode':
            checkZipcode();
            break;
            case 'city':
            checkCity();
            break;
            case 'email':
            checkEmail();
            break;
            case 'password':
            checkPassword();
            break;
            case 'confirmPassword':
            checkPassword();
            break;
            case 'loginPassword':
            checkLoginPassword();
            break;
        }
    });

    function validateForm(){
        if((checkFirstName() === true) && (checkLastName() === true) && (checkStreetAddress() === true) && (checkZipcode() === true) && (checkCity() === true) && (checkEmail() === true) && (checkPassword() === true)){
            window.location.href = "http://127.0.0.1:5500/login.html";
        }else{
            alert('Fill out all of the required fields correctly in order to sign up')
        }
    }

    function validateLoginForm(){
        if((checkLoginPassword() === true)){
            window.location.href = 'http://127.0.0.1:5500/index.html'
        }else{
            alert('Fill out all of the required fields correctly in order to Login')
        }
    }

    $('#regForm').submit((e) =>{
        e.preventDefault();
        validateForm();
    })

    $('#loginForm').submit((e) =>{
        e.preventDefault();
        validateLoginForm();
    })
});