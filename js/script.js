// script file with jquery

var dateNow = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#today").text(dateNow);

var dayNow = moment().format("MMM Do YY");
$("#day").text(dayNow);



