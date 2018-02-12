import axios from 'axios';

const API_KEY = 'd9f3ac13c854caa9595d821324f0fff8';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city},fr`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}