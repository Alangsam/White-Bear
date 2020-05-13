// used http://geoffmuskett.com/really-simple-jquery-character-countdown-in-textarea/ 
//to not just show me how, 
//but only site with simple explanations of how it is working

$(document).ready(function() {
    var maxLength = 240;
    $('#addanswertext').keyup(function () {
        var length = $(this).val().length;
        var length = maxLength-length;
        $('#textcountleft').html(length);

    });
});

$(document).ready(function() {
    var maxLength = 240;
    $('#editimage').keyup(function () {
        var length = $(this).val().length;
        var length = maxLength-length;
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
        if (emailLength == 0) {
            $("#you-have-to-create-email").show();
            $("#Email_textbox").addClass("is-invalid");
        }
        if (emailLength > 0) {
            $("#you-have-to-create-email").hide();
            $("#Email_textbox").removeClass("is-invalid");
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

    });
    
});

