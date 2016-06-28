import { combineReducers } from 'redux';

import WeatherReducer from './reducer_weather'; // hooks up action

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
