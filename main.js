// $('html').hide()

$(document).ready(function () {

    //Set Date to Current Year
    var date = new Date();
    console.log(date)
    $('#footer-date').html(date);

    // $('html').fadeTo(500, 1)

    // Social toggle
    $('#social-click').click(function () {
        $('.social-icon').toggle('slide');
    });

    //Fade In Images On Load
    $('img').load(function () {
        $(this).fadeIn('slow');
    });

});
