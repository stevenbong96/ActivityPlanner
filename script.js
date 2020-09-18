// Declare necessary variables
var saveBtn = $(".saveBtn");

// Set the current date
function currentTime(){
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").append(currentTime);
    console.log(currentTime);
}

// Create the timeblocks for the planner

// Do if/else conditional statement to show past, present, and future color blocks

// Saves data to local storage
function saveToLocal(){
    localStorage.setItem("", JSON.stringify());
}

// To see the data that stored in the local storage
function loadData(){

}

// Add event listener to the save button
saveBtn.on("click", function(event){
    // To prevent the form to load by itself
    event.preventDefault();

})

// Call the current time function
currentTime();