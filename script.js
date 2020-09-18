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
var saveBtn = $(".saveBtn");
var compareTime = moment().format('MMMM Do YYYY, h:mm:ss a');

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
    var descriptionColumn = $("<div>");
    descriptionColumn.addClass("col-md-8 description");
    var descriptionArea = $("<textarea>");
    descriptionColumn.append(descriptionArea);

    // Create if/else conditional statement to show past, present, and future color blocks
    if(currentHour.time < compareTime){
        descriptionColumn.addClass("past");
    } else if (currentHour.time === compareTime){
        descriptionColumn.addClass("present");
    } else if (currentHour.time > compareTime){
        descriptionColumn.addClass("future");
    }

    // Create third column
    var saveBtn = $("<i>");
    var saveColumn = $("<button>");
    saveColumn.addClass("cold-md-2 saveBtn");
    saveBtn.addClass("far fa-save fa-lg");
    saveColumn.append(saveBtn);

    // Append all the variables to the main element
    createRow.append(timeColumn, descriptionColumn, saveColumn);

    // // Declare the necessary variables to create the timeblocks
    // var createRow = $("<form>");
    // var timeColumn = $("<div>");
    // var descriptionColumn = $("<div>");
    // var descriptionArea = $("<textarea>");
    // var saveColumn = $("<button>");
    // var saveBtn = $("<i>");

    // // Give text content to the variables
    // timeColumn.text(`${currentHour.hour}`);

    // // Give each variables their own classes
    // createRow.addClass("row");
    // timeColumn.addClass("col-md-1 hour");
    // descriptionColumn.addClass("col-md-9 description");
    // saveColumn.addClass("cold-md-2 saveBtn");
    // saveBtn.addClass("far fa-save fa-lg");

    // // Append the variables
    // $(".container").append(createRow);
    // descriptionColumn.append(descriptionArea);
    // saveColumn.append(saveBtn);
    // createRow.append(timeColumn, descriptionColumn, saveColumn);

    // // Give attributes to the variables
    // // descriptionColumn.attr("id", currentHour.id);

    // // Create if/else conditional statement to show past, present, and future color blocks
    // if(currentHour.time < compareTime){
    //     descriptionColumn.addClass("past");
    // } else if (currentHour.time === compareTime){
    //     descriptionColumn.addClass("present");
    // } else if (currentHour.time > compareTime){
    //     descriptionColumn.addClass("future");
    // }

    // Append the variables to the main body
    // createRow.append(timeColumn, descriptionColumn, saveColumn);
})

// Saves data to local storage
function saveToLocal(){
    localStorage.setItem("timePlanner", JSON.stringify(timePlanner));
    // localStorage.setItem("timePlanner", timePlanner);
}

// To keep the data exist everytime the user refresh the page
function loadData(){
    localStorage.getItem("timePlanner", JSON.parse(timePlanner));
}

// Add event listener to the save button
saveBtn.on("click", function(event){
    // To prevent the form to load by itself
    event.preventDefault();

    // Save data to local storage
    saveToLocal();

    // Load existing data
    loadData();
})

// Call the current time function
currentTime();