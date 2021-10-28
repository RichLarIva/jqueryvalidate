$(document).ready(function(){
    
})

function submitForm(){
    $("form").validate({
        rules:{
            Username: "required",
            email: "required",
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            Username: "Please enter the username",
            password:{
                required: "Please provide the password",
                minlength: "Your password is to short"
            }
        },
    });
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwordCorrect = false;
    $("form").submit(function(event){
        var pwdOne = $("#pwdOne")
        var pwdTwo = $("#confirmPWD")

        if(pwdOne.val() == pwdTwo.val()){
            passwordCorrect = true;
        }

        if($("#email").val().match(mailformat)){
            console.log("VALID EMAIL!!");
            emailReal = true;
        }

        else if($("#pwdOne").val() != $("#confirmPWD").val()){
            $("#passWordWrong").text("Make sure to type the same password").show();
            passwordCorrect = false;
            return false
        }
    
        if(passwordCorrect == true){
            $("#termsNotSubmit").text("YOU READ THE TERMS").show();
            return true;
        }
        else{
            return false;
        }
    });
}

