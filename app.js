const express = require("express");
const app = express();
const https = require("https");

app.listen(3000, function() {
  console.log("Server running on port 3000 on angela pussy");
});

app.get("/", function(req, res) {

  const url = "https://api.openweathermap.org/data/2.5/weather?q=Penang&appid=7795da86bbefc43e4efaa396cd00a3ab";
  https.get(url, function(response) {
    console.log(response.statusCode);
    // console.log(response.headers);
    // console.log(response);
    const object = {
      name: "Argel",
      favouriteFood: "Dick"
    }
    console.log(JSON.stringify(object));

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      var temp = weatherData.main.temp;
      var desc = weatherData.weather[0].description;
      var icon = weatherData.weather[0].icon;
      var iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<p>" + "weather today in Penang is: " + desc + ", and temperature is: " + temp + "</p>");
      res.write("<h1>" + "diu lei lou mou" + "</h1>");
      res.write("<img src='" + iconURL + "' alt='weather icon'>")
      res.send();
    })
  })

  // res.send("temp today in Penang is: " + desc + ", and temp is: " + temp);
})
