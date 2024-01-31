
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

$(function () {

  var saveButton = $(".saveBtn");

  saveButton.on("click", function () {
    var textArea = $(this).siblings(".description");
    var text = textArea.val();
    var key = $(this).parent().attr("id");
    localStorage.setItem(key, text);
  });

  var timeBlock = $('.time-block');
  timeBlock.each(function(){
    var time = parseInt($(this).attr("id").split("-")[1]);
    var currentHour = parseInt(dayjs().format("H"));
    if(time === currentHour){
      $(this).addClass('present')
    }
    if(time > currentHour){
      $(this).addClass('future')
    }
    if(time < currentHour){
      $(this).addClass('past')
    }


  });

  var textAreas = $(".description")
  textAreas.each(function () {
    var key = $(this).parent().attr("id");
    var text = localStorage.getItem(key);
    $(this).val(text);
  });

  setInterval(function () {
    $("#currentDay").text(dayjs().format('MMM D, YYYY h:mm:ss a'));
  }, 1000)
});