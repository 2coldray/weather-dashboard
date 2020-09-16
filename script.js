$(document).ready(function () {
  console.log("I'm working");

  //DOM Variables
  var userInput = $("#cityInput");
  var searchBtn = $("#search");
  var pastSearches = $("#resultsHere");
  var currentForecast = $("#current-forecast");
  var weekForecast = $("#forecast_div");

  //New Divs to append to DOM
  var city = [];

  //Function calls

  //Event Listeners
  searchBtn.on("click", function () {
    // console.log("I've Been clicked!");
    //Capture User Input
    var userInput = $("#cityInput").val().trim();
    console.log(userInput);
    //JS Variables
    var apiKey = "f64cf3ca5c79a43105f048e67f3d1a6a";
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      userInput +
      "&units=imperial&appid=" +
      apiKey;
    //Function Definitions

    //1st Ajax Call for Current Weather Forecast
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      //Create elements
      var name = $("<div>");
      var temp = $("<div>");
      var humid = $("<div>");
      var speed = $("<div>");
      var lat = response.coord.lat;
      var lon = response.coord.lon;

      //Add Content
      name.text(response.name + " Forecast");
      temp.text("Temperature: " + response.main.temp + " F");
      humid.text("Humidity: " + response.main.humidity + " %");
      speed.text("Wind Speed: " + response.wind.speed + " MPH");
      console.log(response);

      //Append
      currentForecast.append(name);
      currentForecast.append(temp);
      currentForecast.append(humid);
      currentForecast.append(speed);

      //2nd Ajax Call for Current Weather Forecast
      //http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}

      var uvURL =
        "https://api.openweathermap.org/data/2.5/uvi?appid=" +
        apiKey +
        "&lat=" +
        lat +
        "&lon=" +
        lon;

      $.ajax({
        url: uvURL,
        method: "GET",
      }).then(function (response) {
        //Create Elements
        var index = $("<div>");

        //Add content
        console.log(response);
        index.text("UV Index " + response.value);

        //Append to DOM
        currentForecast.append(index);
      });
    });
  });
});
