$(document).ready(function () {

    // Header date
    $("#currentDay").text(moment().format("dddd" + ", " + "MMMM Do"));

   
    var now = moment();
    thisDay = moment().format("YYYY-MM-DD");
    console.log(thisDay);

    if (now.isBefore(thisDay + " " + "17:00:00")) {
        console.log("color gray");
    } else if (now.isAfter(thisDay + " " + "18:00:00")) {
        console.log("color is green");
    } else {
        console.log("color is red");
    }







});
