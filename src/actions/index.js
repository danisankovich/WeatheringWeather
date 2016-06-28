import axios from 'axios';
const API_KEY='51e5b6da455108f31d2ec8cfd7c70035';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city) {
  const url = `${ROOT_URL}q=${city},us&appid=${API_KEY}`;
  const request = axios.get(url);

  console.log('request', request)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
