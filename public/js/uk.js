var email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Pls type a valid email!");
  } else {
    email.setCustomValidity("");
  }
});

// var change = document.getElementsByClassName("myHeader").onmouseover= function () {
// 			document.getElementsByClassName("myHeader").innerHTML= "Click to Read More";
// 	// 		// body...
// 		};

$(document).ready(function ($) {
    $('.myNav').click(function () {
        $('.r1-here').toggle();
    });
    // $('.myHeader').mouseOver(function () {
        
    // });
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

window.onload = function () {
    $(' .lds-spinner').fadeOut(100, function () {
        $(' .lds-spinner').remove();
    });
}