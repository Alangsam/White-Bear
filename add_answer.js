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
   
    $('#addanswertext').click(function() {
        $('#textcountleft').toggle();

        if ('#textcountright').val() hidden()= false 

        $('#textcountright').toggle()

        else:

            do nothing

    });
});

$(document).ready(function() {
    var maxLength = 240;
    $('#editimage').keyup(function () {
        var length = $(this).val().length;
        var length = maxLength-length;
        $('#textcountright').html(length);

    });

    $('#editimage').click(function() {
        $('#textcountright').toggle()

        if ('#textcountleft').val() hidden()= false 

        $('#textcountleft').toggle()

        else:

            do nothing


    });
});



//On landing page, switches to create acc if you hit signup

$(document).ready(function() {
    $('#signup').click(function() {
        $('#create').toggle();
        $('#creating-acc').toggle();
    });
});

