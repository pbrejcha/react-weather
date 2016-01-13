var React = require('react');
var AltContainer = require('alt/AltContainer');
var WeatherActions = require('../../actions/WeatherActions');

var WeatherSearch = React.createClass({
  getInitialState: function(){
    return {
      zipCode: ''
    }
  },
  onChange: function(e){
    this.setState({zipCode: e.target.value});
  },
  onSubmit: function(e){
    e.preventDefault();
    WeatherActions.searchByZipCode(this.state.zipCode);
  },
  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Search by Zip Code</label>
          <input type="text" onChange={this.onChange}/>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherSearch;
