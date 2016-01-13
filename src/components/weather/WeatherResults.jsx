var React = require('react');
var AltContainer = require('alt/AltContainer');

var WeatherResults = React.createClass({
  render(){
    if(this.props.currentWeather){
      return <div>{this.props.currentWeather}</div>
    } else {
      return <div>Weather Results</div>
    }
  }
});

module.exports = WeatherResults;
