var alt = require('../alt');
var $ = require('jquery');

class WeatherActions {
  searchByZipCode(zipCode){
    $.get(
      'http://api.openweathermap.org/data/2.5/weather?zip='+ zipCode+',us&appid=2de143494c0b295cca9337e1e96b00e0',
      data => this.actions.updateWeather(data)
    );
  }

  updateWeather(results){
    this.dispatch(results);
  }

  searchFailed(error){
    this.dispatch(error);
  }
}

module.exports = alt.createActions(WeatherActions);
