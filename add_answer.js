// used http://geoffmuskett.com/really-simple-jquery-character-countdown-in-textarea/ 
//to not just show me how, 
//but only site with simple explanations of how it is working

$(document).ready(function() {
    var maxLength = 240;
    $('#addanswertext').keyup(function () {
        var length = $("#addanswertext").val().length;
        $('#textcountleft').html(length);
        $("#next-go-to-imagery-btn").prop("disabled", false);
        if (length > 240) {
            $("#next-go-to-imagery-btn").prop("disabled", true);
            $(".character-counter").addClass("text-danger");
        }
        
    });
});

$(document).ready(function() {
    var maxLength = 240;
    $('#editimage').keyup(function () {
        var length = $("#editimage").val().length;
        $('#textcountright').html(length);


    });
});



//On landing page, switches to create acc if you hit signup

$(document).ready(function() {
    $('#signup').click(function() {
        $('#create').toggle();
        $('#creating-acc').toggle();
    });
});

//for delete button

$(document).ready(function() {
    $('#show-the-answer').click(function() {
        $('#the-top-card').toggle();
    });
});


//check if the email/password creating inputs have value and if not show an error message

$(document).ready(function() {
    $("#lets-go-btn").click(function() {
        var emailLength = $("#Email_textbox").val().length;
        var enteredEmail = $("#Email_textbox").val();
        var theAtSymbol = enteredEmail.indexOf("@");
        var theLocalPart = enteredEmail.slice(0, theAtSymbol);

        //This is for the create an account email
        if (emailLength == 0) {
            $("#you-have-to-create-email").show();
            $("#Email_textbox").addClass("is-invalid");
        }
        if (emailLength > 0) {
            $("#you-have-to-create-email").hide();
            $("#Email_textbox").removeClass("is-invalid");
        }
        

        var passLength = $("#Email_password").val().length;
        var enteredPassword = $("#Email_password").val();

        //This is for the create an account password
        if (passLength < 9) {
            $("#you-have-to-create-password").show();
            $("#Email_password").addClass("is-invalid");
            
        }
        if (passLength >= 9) {
            $("#you-have-to-create-password").hide();
            $("#Email_password").removeClass("is-invalid");

        };

        if (theLocalPart == enteredPassword) {
            $("#you-need-to-not-use-local").show();
            $("#Email_password").addClass("is-invalid");
        } 
        
        //console.log an object

        let createData =
        {
            _id: 678123,
            email: "whatTheUserEnteredForTheirEmail",
            password: "whatTheUserEnteredForTheirPassword",
            createdOn: 200508232659
        }

        

        
        var theDateYo = new Date();
        var yearCreated = theDateYo.getYear() - 100;
        var monthCreated = theDateYo.getMonth() + 1;
        var dayCreated = theDateYo.getDate();
        var hourCreated = theDateYo.getHours();
        var minutesCreated = theDateYo.getMinutes();
        var secondsCreated = theDateYo.getSeconds();
        var milisCreated = theDateYo.getMilliseconds();
        var fullDateCreated = ("" + yearCreated + monthCreated + dayCreated + hourCreated + minutesCreated + secondsCreated);
        console.log(fullDateCreated);

        // create an _id value by concatenating the milliseconds
        // of the current datetime with a random number between 000 and 999. 

        
        var randomAssNumber =  Math.floor(Math.random() * 1000);
        randomAssNumber = ("0" + randomAssNumber).slice(-3);
        milisCreated = ("0" + milisCreated).slice(-3);
        var uniqueId = ("" + randomAssNumber + milisCreated);
        console.log(uniqueId)
          
        




        if (passLength >= 9 && theLocalPart != enteredPassword && emailLength > 0) {
            
            createData._id = uniqueId;
            createData.email = $("#Email_textbox").val();
            createData.password = $("#Email_password").val();
            createData.createdOn = fullDateCreated;

            console.log(createData);
        }
    });

    $("#the-login-btn").click(function () {
        var otherEmailLength = $("#Email_textbox_bottom").val().length;
        if (otherEmailLength == 0) {
            $("#you-need-to-enter-email").show();
            $("#Email_textbox_bottom").addClass("is-invalid");
        }
        if (otherEmailLength > 0) {
            $("#you-need-to-enter-email").hide();
            $("#Email_textbox_bottom").removeClass("is-invalid");
        }

        //This is for the login email
    });


    $("#the-login-btn").click(function () {
        var otherEmailLength = $("#Email_password_bottom").val().length;
        if (otherEmailLength < 9 && otherEmailLength > 0) {
            $("#you-need-to-enter-password").show();
            $("#Email_password_bottom").addClass("is-invalid");
        }
        if (otherEmailLength == 0) {
            $("#you-need-to-enter-something").show();
            $("#Email_password_bottom").addClass("is-invalid");
        }
        if (otherEmailLength > 0) {
            $("#you-need-to-enter-something").hide();
        }

        if (otherEmailLength >= 9) {
            $("#you-need-to-enter-password").hide();
            $("#Email_password_bottom").removeClass("is-invalid");
        }

        //This is for the login password
    });
});

