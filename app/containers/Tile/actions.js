/*
 *
 * Tile actions
 *
 */

import {
  DEFAULT_ACTION,
  REQUEST_WEATHER,
  REQUEST_FORECAST,
  FORECAST_REQUEST_ERROR,
  WEATHER_REQUEST_ERROR,
  FORECAST_REQUEST_SUCCESS,
  WEATHER_REQUEST_SUCCESS,
} from './constants';

export function requestWeather(station) {
  return {
    type: REQUEST_WEATHER,
    station
  };
}

export function requestForecast(station) {
  return {
    type: REQUEST_FORECAST,
    station
  };
}

export function setWeatherRequestError(error) {
  return {
    type: WEATHER_REQUEST_ERROR,
    error
  };
}

export function setForecastRequestError(error) {
  return {
    type: FORECAST_REQUEST_ERROR,
    error
  };
}

export function setWeatherData(station, weather) {
  return {
    type: WEATHER_REQUEST_SUCCESS,
    weather,
  };
}

export function setForecastData(station, forecast) {
  return {
    type: FORECAST_REQUEST_SUCCESS,
    forecast,
  };
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
