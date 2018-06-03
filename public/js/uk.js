var email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Pls type a valid email!");
  } else {
    email.setCustomValidity("");
  }
});

$(document).ready(function ($) {
    window.onload = function () {
        $(' #lds-spinner').fadeOut(500, function () {
            $(' #lds-spinner').remove();
        });
    }

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