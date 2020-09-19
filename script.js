// Make the time blocks array
var timePlanner = [
    {
        id: "9",
        hour: "09:00",
        time: "9",
    }, {
        id: "10",
        hour: "10:00",
        time: "10",
    }, {
        id: "11",
        hour: "11:00",
        time: "11",
    }, {
        id: "12",
        hour: "12:00",
        time: "12",
    }, {
        id: "13",
        hour: "13:00",
        time: "13",
    }, {
        id: "14",
        hour: "14:00",
        time: "14",
    }, {
        id: "15",
        hour: "15:00",
        time: "15",
    },{
        id: "16",
        hour: "16:00",
        time: "16",
    }, {
        id: "17",
        hour: "17:00",
        time: "17",
    },
]

// Declare necessary variables
var container = $("#container");
var timeHour = moment().format('H');

// Set the current date
function currentTime(){
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").append(currentTime);
}

// Create the timeblocks for the planner
timePlanner.forEach(function(currentHour){
    // Create row
    var createRow = $("<form>");
    createRow.addClass("row time-block");
    $(".container").append(createRow);

    // Create first column
    var timeColumn = $("<div>");
    timeColumn.text(`${currentHour.hour}`);
    timeColumn.addClass("col-md-2 hour");

    // Create second column
    var descriptionArea = $("<textarea>");
    descriptionArea.addClass("col-md-9 description");

    // Get the value from the local storage
    descriptionArea.text(localStorage.getItem(currentHour.time));
    
    // Create if/else conditional statement to show past, present, and future color blocks
    // Using the parseInt due to the problem for 9AM textarea
    if(currentHour.time < parseInt(timeHour)){
        descriptionArea.addClass("past");
    } else if (currentHour.time == parseInt(timeHour)){
        descriptionArea.addClass("present");
    } else if (currentHour.time > parseInt(timeHour)){
        descriptionArea.addClass("future");
    }

    // Create third column
    var saveBtn = $("<p>");
    var saveColumn = $("<button>");
    saveColumn.addClass("col-md-1 saveBtn");
    saveBtn.addClass("far fa-save");
    saveColumn.attr("id", currentHour.id); // Give id the save button by using attr command in jQuery
    saveColumn.append(saveBtn);

    // Append all the variables to the main element
    createRow.append(timeColumn, descriptionArea, saveColumn);
})

// Saves data to local storage
function saveToLocal(key, value){
    localStorage.setItem(key, value);
}

// Add event listener to the save button
container.on("click", "button", function(event){
     // To prevent the form to load by itself
    event.preventDefault();
    // console.log($(this).prev().val());

    // Save data to local storage
    saveToLocal(this.id, $(this).prev().val());
})

// Call the current time function
currentTime();
