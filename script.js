$(document).ready(function() {
    console.log("Hello");

//DOM Variables
var userInput = $("#cityInput");
var searchBtn = $("#search");
var pastSearches = $("#resultsHere");
var currentForecast = $("#current-forecast");
var weekForecast = $("#forecast_div");

//JS Variables
var apiKey = "ea2e8a81e35136522206b76cc7234d3f";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=f64cf3ca5c79a43105f048e67f3d1a6a";

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
}); 