$(document).ready(function () {

  //DOM Variables
  var userInput = $("#cityInput");
  var searchBtn = $("#search");
  var pastSearches = $("#resultsHere");
  var currentForecast = $("#current-forecast");
  var weekForecast = $("#forecast_div");

  //Function calls

  //Event Listeners
  searchBtn.on("click", function (event) {
    //Capture User Input
    event.preventDefault();
    var userInput = $("#cityInput").val().trim();
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
      var savedCity = [];
      var cityButtons = $("<button>");
      currentForecast.empty();

      //Add Content
      name.text(response.name + " Forecast " + moment().format("MM-DD-YYYY"));
      temp.text("Temperature: " + response.main.temp + " F");
      humid.text("Humidity: " + response.main.humidity + " %");
      speed.text("Wind Speed: " + response.wind.speed + " MPH");
      //Add click event for button

      //Append
      currentForecast.append(name);
      currentForecast.append(temp);
      currentForecast.append(humid);
      currentForecast.append(speed);
      savedCity.push(userInput);

      for (var i = 0; i < savedCity.length; i++) {
        cityButtons.text(savedCity[i]);
        pastSearches.append(cityButtons);
      }
      //Send to local storage
      localStorage.setItem(userInput, JSON.stringify(savedCity));

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
        index.empty();

        //Add content
        index.text("UV Index: " + response.value);
        if (response.value < 4) {
          index.addClass("low");
        } else if (response.value > 4 && response.value < 8) {
          index.addClass("medium");
        } else {
          index.addClass("high");
        }

        //Append to DOM
        currentForecast.append(index);

        //Final Ajax Call
        var forecastURL =
          "https://api.openweathermap.org/data/2.5/forecast?q=" +
          userInput +
          "&units=imperial&appid=" +
          apiKey;

        $.ajax({
          url: forecastURL,
          method: "GET",
        }).then(function (response) {
          weekForecast.empty();
          for (var i = 0; i < response.list.length; i = i + 8) {
            //Create Element
            var card = $("<div>").addClass("col border p- 1");
            var results = $("<div>").text(response.list[i]);
            var date = $("<div>").text(response.list[i].dt_txt);
            var temp = $("<div>").text(
              "Temp: " + response.list[i].main.temp + " F"
            );
            var humid = $("<div>").text(
              "Humidity: " + response.list[i].main.humidity + " %"
            );
            //Append to Card and then element
            card.append(date);
            card.append(temp);
            card.append(humid);
            weekForecast.append(card);
          }
        });
      });
    });
  });
});
