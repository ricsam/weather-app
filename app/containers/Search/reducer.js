/*
 *
 * Search reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_AUTOCOMPLETE,
  GET_AUTOCOMPLETE_ERROR,
  GET_AUTOCOMPLETE_SUCCESS,

  GET_APIXU_SEARCH,
  GET_APIXU_SEARCH_ERROR,
  GET_APIXU_SEARCH_SUCCESS,

  SET_AUTOCOMPLETION_VALUE,
  SET_WEATHER_STATION_LOCATION,
  SET_WEATHER_STATION,

  SET_AUTOCOMPLETE_CARRET_POSITION

} from './constants';

const initialState = fromJS({
  autocomplete: false,
  autocomplete_loading: false,
  autocomplete_error: false,
  autocomplete_value: '',

  autocomplete_carret_position: 0,

  weather_station_location: false,

  apixusearch: false,
  apixusearch_loading: false,
  apixusearch_error: false,
  weather_station: false
});

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_AUTOCOMPLETE:
      return state
        .set('autocomplete_loading', true)
        .set('autocomplete_error', false);
    case GET_AUTOCOMPLETE_ERROR:
      return state
        .set('autocomplete_loading', false)
        .set('autocomplete_error', action.error);
    case GET_AUTOCOMPLETE_SUCCESS:
      return state
        .set('autocomplete_loading', false)
        .set('autocomplete_error', false)
        .set('autocomplete', action.autocomplete); /* action.autocomplete = Array()*/

    case GET_APIXU_SEARCH:
      return state
        .set('apixusearch_loading', true)
        .set('apixusearch_error', false);
    case GET_APIXU_SEARCH_ERROR:
      return state
        .set('apixusearch_loading', false)
        .set('apixusearch_error', action.error);
    case GET_APIXU_SEARCH_SUCCESS:
      return state
        .set('apixusearch_loading', false)
        .set('apixusearch_error', false)
        .set('apixusearch', action.results); /* action.results = Array()*/


    case SET_AUTOCOMPLETION_VALUE:
      return state
        .set('weather_station_location', false)
        .set('weather_station', false)
        .set('autocomplete_value', action.value);

    case SET_AUTOCOMPLETE_CARRET_POSITION:
      return state
        .set('weather_station_location', false)
        .set('weather_station', false)
        .set('autocomplete_carret_position', action.position)

    case SET_WEATHER_STATION_LOCATION:
      return state
        .set('weather_station_location', action.value)
        .set('weather_station', false);

    case SET_WEATHER_STATION:
      return state
        .set('weather_station', action.value);



    default:
      return state;
  }
}

export default searchReducer;
