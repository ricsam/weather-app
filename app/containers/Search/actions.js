/*
 *
 * Search actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_AUTOCOMPLETE,
  GET_AUTOCOMPLETE_ERROR,
  GET_AUTOCOMPLETE_SUCCESS,

  GET_APIXU_SEARCH,
  GET_APIXU_SEARCH_ERROR,
  GET_APIXU_SEARCH_SUCCESS,

  SET_AUTOCOMPLETION_VALUE,
  SET_AUTOCOMPLETE_CARRET_POSITION,
  SET_WEATHER_STATION_LOCATION,
  SET_WEATHER_STATION,
} from './constants';


export function requestAutocomplete() {
  return {
    type: GET_AUTOCOMPLETE,
  };
}

export function requestAutocomplete_failed(error) {
  return {
    type: GET_AUTOCOMPLETE_ERROR,
    error,
  };
}

export function requestAutocomplete_succeeded(autocomplete) {
  return {
    type: GET_AUTOCOMPLETE_SUCCESS,
    autocomplete,
  };
}

export function requestApixuSearch() {
  return {
    type: GET_APIXU_SEARCH,
  };
}

export function requestApixuSearch_failed(error) {
  return {
    type: GET_APIXU_SEARCH_ERROR,
    error,
  };
}

export function requestApixuSearch_succeeded(results) {
  return {
    type: GET_APIXU_SEARCH_SUCCESS,
    results,
  };
}


export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setAutocompleteValue(value) {
  return {
    type: SET_AUTOCOMPLETION_VALUE,
    value
  };
}

export function setAutocompleteCarretPosition(position) {
  return {
    type: SET_AUTOCOMPLETE_CARRET_POSITION,
    position
  };
}

export function setWeatherStationLocation(value) {
  return {
    type: SET_WEATHER_STATION_LOCATION,
    value
  };
}

export function setWeatherStation(value) {
  return {
    type: SET_WEATHER_STATION,
    value
  };
}
