import axios from 'axios';
const API_KEY='51e5b6da455108f31d2ec8cfd7c70035';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?`; //5 day forecase
// const ROOT_URL=`http://api.openweathermap.org/data/2.5/weather?`; //current
export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(zipCode) {
  const url = `${ROOT_URL}q=${zipCode},us&appid=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
