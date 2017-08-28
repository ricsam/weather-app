import { take, call, put, select, takeLatest, throttle, takeEvery } from 'redux-saga/effects';
import { GET_AUTOCOMPLETE, GET_APIXU_SEARCH } from './constants';

import {
  makeSelectAutocompletionInput,
  makeSelectGetAutocompleteCarretPosition,
  makeSelectWeatherStationLocation,
  makeSelectWeatherStation
} from './selectors';

import {
  requestAutocomplete_succeeded,
  requestAutocomplete_failed,
  requestApixuSearch_succeeded,
  requestApixuSearch_failed
} from './actions';

import request from 'utils/request';

function getGapi() { return new Promise((resolve, reject) => {

  const apiKey = 'AIzaSyAMHTSmuAHdDASYzeA7dFNCXFcWJsO-SLU';

  if ( ! document.getElementById('gapi-script') ) {

    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&libraries=places";
    script.id = 'gapi-script';

    script.onload = () => {
      resolve(window.google);
    };

    document.body.appendChild(script);

  } else {
    resolve(window.google);
  }

})}

function requestGoogle(input, offset) { return new Promise(async (resolve, reject) => {
  const google = await getGapi();
  const AC = new google.maps.places.AutocompleteService();

  AC.getQueryPredictions({
    input,
    offset
  }, (predictions) => {
    resolve({predictions});
  });
  // const service = new google.maps.places.AutocompleteService()
})}

export function* getAutocomplete() {
  const carretPosition = yield select(makeSelectGetAutocompleteCarretPosition()),
        autocompleteValue = yield select(makeSelectAutocompletionInput());

  // const requestURL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyAMHTSmuAHdDASYzeA7dFNCXFcWJsO-SLU&`;
  if ( ! autocompleteValue ) {
    return yield put(requestAutocomplete_succeeded(false));
  }
  try {
    const autocompleteResults = yield call(requestGoogle, autocompleteValue, carretPosition);
    yield put(requestAutocomplete_succeeded(
      autocompleteResults.predictions
    ));
  } catch (error) {
    console.log(error);
    yield put(requestAutocomplete_failed({
      error
    }));
  }
}

export function* getApixuSearch() {
  const weatherStationLocation = yield select(makeSelectWeatherStationLocation());
  const requestURL = location.protocol
    + "//api.apixu.com/v1/search.json?key=d7c304d679df4b96a60233450172508&q="
    + weatherStationLocation;


  try {
    const searchResults = yield call(request, requestURL, {mode: 'cors'});
    yield put(requestApixuSearch_succeeded(searchResults));
  } catch (error) {
    yield put(requestApixuSearch_failed({
      error
    }));
  }

}

// Individual exports for testing
export function* searchSaga() {
  // See example in containers/HomePage/sagas.js
  yield throttle(1500, GET_AUTOCOMPLETE, getAutocomplete);
  // yield takeEvery(GET_AUTOCOMPLETE, getAutocomplete);
  yield takeLatest(GET_APIXU_SEARCH, getApixuSearch);
}

// All sagas to be loaded
export default [
  searchSaga,
];
