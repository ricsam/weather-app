import { take, call, put, select, takeLatest } from 'redux-saga/effects';

import { REQUEST_FORECAST, REQUEST_WEATHER } from './constants';
import {
  setForecastData,
  setWeatherData,
  setForecastRequestError,
  setWeatherRequestError,
} from './actions';

import request from 'utils/request';

function apixuRequest(weatherStationLocation, api) {

  return location.protocol
    + "//api.apixu.com/v1/" + api + ".json?key=d7c304d679df4b96a60233450172508&q="
    + weatherStationLocation;


}

export function* requestForecast(action) {
  const {station} = action;
  const requestURL = apixuRequest(station, 'forecast');

  try {
    const forecast = yield call(request, requestURL, {mode: 'cors'});
    yield put(setForecastData(station, forecast));
  } catch (error) {
    yield put(
      setForecastRequestError({error})
    );
  }
}
export function* requestWeather(action) {

  const {station} = action;
  const requestURL = apixuRequest(station, 'current');

  try {
    const weather = yield call(request, requestURL, {mode: 'cors'});
    yield put(setWeatherData(station, weather));
  } catch (error) {
    yield put(
      setWeatherRequestError({error})
    );
  }
}

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
  yield takeLatest(REQUEST_FORECAST, requestForecast);
  yield takeLatest(REQUEST_WEATHER, requestWeather);

}

// All sagas to be loaded
export default [
  defaultSaga,
];


