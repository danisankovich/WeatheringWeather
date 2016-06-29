import React, {Component} from 'react';
import { connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {

    const name = cityData.city.name
    const temps = cityData.list.map(weather => (weather.main.temp * (9/5) - 459.67)) //array of temperatures (in kelvin)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)

 //Chart data = and color = sets the props of the Chart component to props.data =temps,pressures,or humidiites and props.color = color
    return (
      <tr>
        <td>
          {name}
        </td>
        <td>
          <Chart data={temps} color='orange' units="F"/>
        </td>
        <td>
          <Chart data={pressures} color='blue' units="hPa"/>
        </td>
        <td>
          <Chart data={humidities} color='red' units="%"/>
        </td>
      </tr>
    )

  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Zip Code:</th>
            <th>Temperature (F):</th>
            <th>Pressure (hPa):</th>
            <th>Humidity (%):</th>
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
