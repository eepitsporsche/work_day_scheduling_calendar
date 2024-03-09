/*Call to jQuery to ensure that code isn't run until the browser has finished 
rendering all the elements in the html*/
$(document).ready(function () {
 
    //Display current date and time in the header of the page
    $("#currentDay").text(dayjs().format("dddd, MMM DD, YYYY - h:mm:ss a"))

    //Listener for click events on the save button
    $(".saveBtn").on("click", function() {
      var userInput = $(this).siblings(".description").val();
      var inputTimeBlock = $(this).parent().attr("id");

      //Save user input and corresponding time-block data to local storage
      localStorage.setItem(inputTimeBlock, userInput);

      //Display confirmation message when user clicks save button
      $(".save-confirmation").css("visibility", "visible");

      setTimeout(function() { 
        $(".save-confirmation").css("visibility", "hidden");
      }, 2000)
    });

    /*Get any user input that was saved in localStorage and set the 
    values of the corresponding textarea elements*/
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));


    //Pull current hour using DayJS
    var currentHour = dayjs().hour();


    /*Apply the past, present, or future class to each timeblock by 
    comparing the id to the current hour*/
    function identifyTimePhase() {

      //Loop to compare each time block hour to current hour
      $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("hour-")[1]);

        //Apply class styles based on if statements
        if (timeBlock < currentHour) {
          $(this).addClass("past");
          $(this).removeClass("present");
          $(this).removeClass("future");
        }

        else if (timeBlock === currentHour) {
          $(this).addClass("present");
          $(this).removeClass("past");
          $(this).removeClass("future");
        }

        else {
          $(this).addClass("future");
          $(this).removeClass("present");
          $(this).removeClass("past");
        }
      })
    }


    //Clear local storage at midnight and reload page to allow new day scehduling
    if (currentHour >= "10:55:00") {
      localStorage.clear();
    }


  //Call function to display current date and time
  identifyTimePhase();

  })