/*
 *
 * Tile reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  REQUEST_WEATHER,
  REQUEST_FORECAST,
  FORECAST_REQUEST_ERROR,
  WEATHER_REQUEST_ERROR,
  FORECAST_REQUEST_SUCCESS,
  WEATHER_REQUEST_SUCCESS,
} from './constants';

const initialState = fromJS({

  weather: false,
  weather_loading: false,
  weather_error: false,

  forecase: false,
  forecast_loading: false,
  forecast_error: false,

});

function tileReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case REQUEST_WEATHER:
      return state
        .set('weather_loading', true)
        .set('weather_error', false);
    case REQUEST_FORECAST:
      return state
        .set('forecast_loading', true)
        .set('forecast_error', false);
    case FORECAST_REQUEST_ERROR:
      return state
        .set('forecast_loading', false)
        .set('forecast_error', true);
    case WEATHER_REQUEST_ERROR:
      return state
        .set('weather_loading', false)
        .set('weather_error', true);
    case FORECAST_REQUEST_SUCCESS:
      return state
        .set('forecast_loading', false)
        .set('forecast_error', false)
        .set('forecast', action.forecast);

    case WEATHER_REQUEST_SUCCESS:
      return state
        .set('weather_loading', false)
        .set('weather_error', false)
        .set('weather', action.weather);

    default:
      return state;
  }
}

export default tileReducer;
