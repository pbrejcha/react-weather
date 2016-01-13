var alt = require('../alt');
var _ = require('lodash');
var WeatherActions = require('../actions/WeatherActions');

class WeatherStore {
  constructor() {
    this.currentWeather = {};

    this.bindListeners({
      onUpdateWeather: WeatherActions.UPDATE_WEATHER
    });

    this.exportPublicMethods({
      getCurrentWeather: this.getCurrentWeather
    });
  }

  onUpdateWeather(weather){
    this.currentWeather = weather;
  }

  getCurrentWeather(){
    return this.currentWeather;
  }
}

module.exports = alt.createStore(WeatherStore, 'WeatherStore');
