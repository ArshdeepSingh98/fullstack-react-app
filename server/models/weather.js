const request = require("request-promise");

const API_KEY = "90a351c1bcc8903d3628655d423382bc";

class Weather {
  static retrieveByCity(city, callback) {
    request({
      uri: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
      json: true
    })
      .then(function(res) {
        callback(res);
      })
      .catch(function(err) {
        console.log(err);
        callback({ error: "Could not raech OpenWeatherMap API" });
      });
  }
}

module.exports = Weather;
