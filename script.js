$(document).ready(function() {
    console.log("I'm working");

//DOM Variables
var userInput = $("#cityInput");
var searchBtn = $("#search");
var pastSearches = $("#resultsHere");
var currentForecast = $("#current-forecast");
var weekForecast = $("#forecast_div");

//JS Variables
var apiKey = "f64cf3ca5c79a43105f048e67f3d1a6a";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=Atlanta&appid=" + apiKey;

//Function Definitions
//Practice Ajax Call First
$.ajax({
    url : queryURL,
    method : "GET"
}).then(function(response){
    console.log(response.main.temp)
});

//Function calls

//Event Listeners
searchBtn.on("click", function() {
    console.log("I've Been clicked!");
});

}); 