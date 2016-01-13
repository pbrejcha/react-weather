var React = require('react');
var AltContainer = require('alt/AltContainer');
var WeatherStore = require('../../stores/WeatherStore');
var WeatherSearch = require('./WeatherSearch.jsx');
var WeatherResults = require('./WeatherResults.jsx');

var WeatherMain = React.createClass({
  componentDidMount(){
    WeatherStore.getCurrentWeather();
  },
  getInitialState: function () {
    return {
      'zipCode': ''
    };
  },
  render(){
    return (
      <div>
        <AltContainer>
          <WeatherSearch zipCode={this.state.zipCode}/>
        </AltContainer>
        <AltContainer store={WeatherStore}>
          <WeatherResults/>
        </AltContainer>
      </div>
    )
  }
});

module.exports = WeatherMain;
