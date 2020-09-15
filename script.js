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
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=Atlanta&units=imperial&appid=" + apiKey;

//Function Definitions
//1st Ajax Call for Current Weather Forecast
$.ajax({
    url : queryURL,
    method : "GET"
}).then(function(response){
    console.log(response.name)
    currentForecast.text(response.name + " Current Day Forecast"); 
    console.log(response.main.temp);
    currentForecast.text("Temperature: " + response.main.temp + " F");
    console.log(response.main.humidity);
    currentForecast.text("Humidity: " + response.main.humidity + " %");
    console.log(response)
});

//2nd Ajax Call for Current Weather Forecast
var uvURL = "h"

//Function calls

//Event Listeners 
searchBtn.on("click", function() {
    console.log("I've Been clicked!");
});

}); 