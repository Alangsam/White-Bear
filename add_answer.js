$(document).ready(function() {
    var max_length = 240;
    $('#addanswertext').keyup(function () {
      var textlen = maxLength - $(this).val().length;
      $('#textcountleft').html(textlen);

    });
});    