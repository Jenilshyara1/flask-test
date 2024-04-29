// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// nice select
$(document).ready(function () {
    $('select').niceSelect();
});

// date picker
$(function () {
    $("#inputDate").datepicker({
        autoclose: true,
        todayHighlight: true
    }).datepicker('update', new Date());
});

// owl carousel slider js
$('.team_carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: true,
    autoplay: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            margin: 0
        },
        576: {
            items: 2,
        },
        992: {
            items: 3
        }
    }
})


// Prediction
function submitPredictionForm(event) {
    event.preventDefault();

    let inputPregnancy = document.getElementById('inputPregnancy').value;
    let inputAge = document.getElementById('inputAge').value;
    let inputWeight = document.getElementById('inputWeight').value;
    let inputHeight = document.getElementById('inputHeight').value;

    console.log("Pregnancy:", inputPregnancy);
    console.log("Age:", inputAge);
    console.log("Weight:", inputWeight);
    console.log("Height:", inputHeight);
}

function readMoreFunction(btnId) {
    var dotsId = `dots${btnId}`;
    var moreTextId = `more${btnId}`;
    var dots = document.getElementById(dotsId);
    var moreText = document.getElementById(moreTextId);
    var btnText = document.getElementById(`myBtn${btnId}`);

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
      moreText.style.transition = "all 0.4s ease-in-out";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
      moreText.style.transition = "all 0.4s ease-in-out";
    }
  }