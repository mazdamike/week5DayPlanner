$(document).ready(function () {

    // Display the date in the header
    $("#currentDay").text(moment().format("dddd" + ", " + "MMMM Do"));


    // Apply appropriate class to each row (past, present, or future)
    var now = moment();
    thisDay = moment().format("YYYY-MM-DD");

    if (now.isBefore(thisDay + " " + "07:00:00")) {
        $("#7am").addClass("future");
    } else if (now.isAfter(thisDay + " " + "08:00:00")) {
        $("#7am").addClass("past");
    } else {
        $("#7am").addClass("present");
    }

    if (now.isBefore(thisDay + " " + "08:00:00")) {
        $("#8am").addClass("future");
    } else if (now.isAfter(thisDay + " " + "09:00:00")) {
        $("#8am").addClass("past");
    } else {
        $("#8am").addClass("present");
    }

    if (now.isBefore(thisDay + " " + "09:00:00")) {
        $("#9am").addClass("future");
    } else if (now.isAfter(thisDay + " " + "10:00:00")) {
        $("#9am").addClass("past");
    } else {
        $("#9am").addClass("present");
    }

    if (now.isBefore(thisDay + " " + "10:00:00")) {
        $("#10am").addClass("future");
    } else if (now.isAfter(thisDay + " " + "11:00:00")) {
        $("#10am").addClass("past");
    } else {
        $("#10am").addClass("present");
    }

    if (now.isBefore(thisDay + " " + "11:00:00")) {
        $("#11am").addClass("future");
    } else if (now.isAfter(thisDay + " " + "12:00:00")) {
        $("#11am").addClass("past");
    } else {
        $("#11am").addClass("present");
    }

    if (now.isBefore(thisDay + " " + "12:00:00")) {
        $("#12pm").addClass("future");
    } else if (now.isAfter(thisDay + " " + "13:00:00")) {
        $("#12pm").addClass("past");
    } else {
        $("#12pm").addClass("present");
    }

    if (now.isBefore(thisDay + " " + "13:00:00")) {
        $("#1pm").addClass("future");
    } else if (now.isAfter(thisDay + " " + "14:00:00")) {
        $("#1pm").addClass("past");
    } else {
        $("#1pm").addClass("present");
    }

    if (now.isBefore(thisDay + " " + "14:00:00")) {
        $("#2pm").addClass("future");
    } else if (now.isAfter(thisDay + " " + "15:00:00")) {
        $("#2pm").addClass("past");
    } else {
        $("#2pm").addClass("present");
    }

    if (now.isBefore(thisDay + " " + "15:00:00")) {
        $("#3pm").addClass("future");
    } else if (now.isAfter(thisDay + " " + "16:00:00")) {
        $("#3pm").addClass("past");
    } else {
        $("#3pm").addClass("present");
    }

    if (now.isBefore(thisDay + " " + "16:00:00")) {
        $("#4pm").addClass("future");
    } else if (now.isAfter(thisDay + " " + "17:00:00")) {
        $("#4pm").addClass("past");
    } else {
        $("#4pm").addClass("present");
    }

    if (now.isBefore(thisDay + " " + "17:00:00")) {
        $("#5pm").addClass("future");
    } else if (now.isAfter(thisDay + " " + "18:00:00")) {
        $("#5pm").addClass("past");
    } else {
        $("#5pm").addClass("present");
    }


    // get user input from local storage and display it on the calendar
    var storedUserInput7 = localStorage.getItem("7am");
    $("#7amText").text(storedUserInput7);

    var storedUserInput8 = localStorage.getItem("8am");
    $("#8amText").text(storedUserInput8);

    var storedUserInput9 = localStorage.getItem("9am");
    $("#9amText").text(storedUserInput9);

    var storedUserInput10 = localStorage.getItem("10am");
    $("#10amText").text(storedUserInput10);

    var storedUserInput11 = localStorage.getItem("11am");
    $("#11amText").text(storedUserInput11);

    var storedUserInput12 = localStorage.getItem("12pm");
    $("#12pmText").text(storedUserInput12);

    var storedUserInput13 = localStorage.getItem("1pm");
    $("#1pmText").text(storedUserInput13);

    var storedUserInput14 = localStorage.getItem("2pm");
    $("#2pmText").text(storedUserInput14);

    var storedUserInput15 = localStorage.getItem("3pm");
    $("#3pmText").text(storedUserInput15);

    var storedUserInput16 = localStorage.getItem("4pm");
    $("#4pmText").text(storedUserInput16);

    var storedUserInput17 = localStorage.getItem("5pm");
    $("#5pmText").text(storedUserInput17);


    // save user input to local storage
    $("#7amBtn").click(function () {
        var userInput7 = $("#7amText").val();
        localStorage.setItem("7am", userInput7);
    });

    $("#8amBtn").click(function () {
        var userInput8 = $("#8amText").val();
        localStorage.setItem("8am", userInput8);
    });

    $("#9amBtn").click(function () {
        var userInput9 = $("#9amText").val();
        localStorage.setItem("9am", userInput9);
    });

    $("#10amBtn").click(function () {
        var userInput10 = $("#10amText").val();
        localStorage.setItem("10am", userInput10);
    });

    $("#11amBtn").click(function () {
        var userInput11 = $("#11amText").val();
        localStorage.setItem("11am", userInput11);
    });

    $("#12pmBtn").click(function () {
        var userInput12 = $("#12pmText").val();
        localStorage.setItem("12pm", userInput12);
    });

    $("#1pmBtn").click(function () {
        var userInput13 = $("#1pmText").val();
        localStorage.setItem("1pm", userInput13);
    });

    $("#2pmBtn").click(function () {
        var userInput14 = $("#2pmText").val();
        localStorage.setItem("2pm", userInput14);
    });

    $("#3pmBtn").click(function () {
        var userInput15 = $("#3pmText").val();
        localStorage.setItem("3pm", userInput15);
    });

    $("#4pmBtn").click(function () {
        var userInput16 = $("#4pmText").val();
        localStorage.setItem("4pm", userInput16);
    });

    $("#5pmBtn").click(function () {
        var userInput17 = $("#5pmText").val();
        localStorage.setItem("5pm", userInput17);
    });

});
