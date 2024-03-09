/*Call to jQuery to ensure that code isn't run until the browser has finished 
rendering all the elements in the html*/
$(document).ready(function () {

  $(function () {

    //Listener for click events on the save button
    $(".saveBtn").on("click", function() {
      var userInputFields = $(this).siblings(".description").val();
      var inputTimeBlock = $(this).parent().attr("id");

      //Save user input and corresponding time-block data to local storage
      localStorage.setItem(inputTimeBlock, userInputFields)

      $(".save-confirmation").css("visibility", "visible");
      setTimeout(function() { 
        $(".save-confirmation").css("visibility", "hidden");
    }, 2000)

      // $("calendar-container").
    });

    /*Get any user input that was saved in localStorage and set the 
    values of the corresponding textarea elements*/
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


    /*Apply the past, present, or future class to each timeblock by 
    comparing the id to the current hour*/
    function identifyTimePhase() {

      //Pull current hour using DayJS
      var currentHour = dayjs().hour();

      //Loop to compare each time block hour to current hour
      $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

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

  //Call function to display current date and time
  identifyTimePhase();
 
  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("dddd, MMM DD, YYYY - h:mm:ss a"))

  });
})