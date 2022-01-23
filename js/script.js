// script file with jquery

var colorEl = document.getElementById('color');


$(document).ready(function() {
$(".nextBtn").on("click", function(){ 
     dateNow = moment().add(1,'days');
     $("#today").text(dateNow);
})
})

$(document).ready(function() {
    $(".nextMonth").on("click", function(){ 
         dateNow = moment().add(1,'month');
         $("#today").text(dateNow);
    })
    })

$('a.printPage').click(function(){
    window.print();
    return false;
});



var dateNow = moment().format('dddd - MMM Do YY');
$("#today").text(dateNow);

var dayNow = moment().format("MMM Do YY h:mm:ss");
$("#day").text(dayNow);

var nextDay = moment().add(1,'days');

/// set up save button to listen to click and save item in description

$(document).ready(function() {
$(".saveBtn").on("click", function () {

    var desriptionText = $(this).siblings(".description").val();
    var calTime = $(this).parent().attr("id");

    // save in local storage
    localStorage.setItem(calTime, desriptionText);
})


function timeTheme(){
    // current time from Momento
    /// large H for military time.
    var currentTime = parseInt(moment().format('H'));
    console.log(currentTime + " current military time");
   

    // check all boxes by looping and checking vs current time and change theme
    $(".time-block").each(function(){
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
        console.log(timeBlock);

if (timeBlock < currentTime) {
    $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
     else if (timeBlock === currentTime) {
        $(this).removeClass("future");
        $(this).addClass("present");
        $(this).removeClass("past");
    } else {
        $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
    }


})

}


/// Put info into #hour_with description from localstorage with value with Key "hour_"
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
$("#hour18 .description").val(localStorage.getItem("hour18"));
$("#hour19 .description").val(localStorage.getItem("hour19"));



// get items from local storage

timeTheme()


});

