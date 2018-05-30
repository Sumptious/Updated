$(document).ready(function () {
    $('.myNav').click(function () {
        $('.r1-here').toggle();
    });
    $('.text, .text1, .text2').hide();
    $('.myHeader').click(function () {
        $('.text').toggle();
    });

    $('.myHeader1').click(function () {
        $('.text1').toggle();
    });

    $('.myHeader2').click(function () {
        $('.text2').toggle();
    });
});