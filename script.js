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
var compareTime = moment().format('MMMM Do YYYY, h:mm:ss a');
var timeHour = moment().format('H');
// var comparator = 7;

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
    // var descriptionColumn = $("<div>");
    var descriptionArea = $("<textarea>");
    descriptionArea.addClass("col-md-8 description");
    descriptionArea.text(localStorage.getItem(currentHour.time));
    // descriptionArea.attr("id", currentHour.id);
    // descriptionArea.append(createRow);
    
    // Create if/else conditional statement to show past, present, and future color blocks
    if(timeHour < currentHour.time){
        descriptionArea.addClass("past");
    } else if (timeHour == currentHour.time){
        descriptionArea.addClass("present");
    } else if (timeHour > currentHour.time){
        descriptionArea.addClass("future");
    }
    // comparator++;

    // Create third column
    var saveBtn = $("<p>");
    var saveColumn = $("<button>");
    saveColumn.addClass("col-md-2 saveBtn");
    saveBtn.addClass("far fa-save fa-lg");
    saveColumn.attr("id", currentHour.id); // Give id the save button by using attr command in jQuery
    saveColumn.append(saveBtn);

    // Append all the variables to the main element
    createRow.append(timeColumn, descriptionArea, saveColumn);
})

// Saves data to local storage
function saveToLocal(key, value){
    localStorage.setItem(key, value);
    // localStorage.setItem("descriptionArea", descriptionArea);
}

// To keep the data exist everytime the user refresh the page
function loadData(){
    var getDes = JSON.parse(localStorage.getItem("descriptionArea"));
    console.log(getDes);
    // localStorageData.forEach(function(){
    //     var descriptionP = $("<p>");
    //     descriptionP.text(`${}`);
    //     $("document").append(descriptionP);
    // })
}

// Add event listener to the save button
container.on("click", "button", function(event){
     // To prevent the form to load by itself
    event.preventDefault();
    console.log(this);
    console.log($(this));
    // console.log($(this).prev().val());

    // Save data to local storage
    saveToLocal(this.id, $(this).prev().val());

    // Load existing data
    // loadData();
})

// Call the current time function
currentTime();

// Add the clear button after the save button
// And make the same id as the save button but different attributes
// Do localStorage.setItem(key, $(this).prev().prev().val(""));
// 