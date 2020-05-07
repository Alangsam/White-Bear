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

//On landing page, switches to create acc if you hit signup

$(document).ready(function() {
    $('#signup').click(function() {
        $('#create').toggle();
        $('#creating-acc').toggle();
    });
});