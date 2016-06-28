import React, {Component} from 'react';
import { connect} from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData) {
    console.log(cityData)
    return (
      <tr>
        <td>
          {cityData.city.name}
        </td>
      </tr>)
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City:</th>
            <th>Temperature:</th>
            <th>Pressure:</th>
            <th>Humidity:</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}) { //gives access to this.props.weather in weatherlist
// function mapStateToProps(state) { above is same as const weather = state.weather
  return {
    weather
  }  //because we combined weather reducer to weather key in reducers/index.js
  //if we do it with (state, do {weather: state.weather})
}

export default connect(mapStateToProps)(WeatherList);
