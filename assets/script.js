/*Call to jQuery to ensure that code isn't run until the browser has finished 
rendering all the elements in the html*/
$(document).ready(function () {

$(function () {
  //Listener for click events on the save button
  $(".saveBtn").on("click", function() {
    var userInputFields = $(this).siblings(".description").val();
    var inputTimeBlock = $(this).parent().attr("id");
    })


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
  
identifyTimePhase();
  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
 

 
  // TODO: Add code to display the current date in the header of the page.
$("#currentDay").text(dayjs().format("dddd, MMM DD, YYYY - h:mm:ss a"))

});

})