import { createSelector } from 'reselect';

/**
 * Direct selector to the tile state domain
 */
const selectTileDomain = () => (state) => state.get('tile');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Tile
 */

const makeSelectGetForecast = () => createSelector(
  selectTileDomain(),
  (substate) => substate.get('forecast')
);
const makeSelectGetForecastError = () => createSelector(
  selectTileDomain(),
  (substate) => substate.get('forecast_error')
);
const makeSelectGetForecastLoading = () => createSelector(
  selectTileDomain(),
  (substate) => substate.get('forecast_loading')
);
const makeSelectGetWeather = () => createSelector(
  selectTileDomain(),
  (substate) => substate.get('weather')
);
const makeSelectGetWeatherError = () => createSelector(
  selectTileDomain(),
  (substate) => substate.get('weather_error')
);
const makeSelectGetWeatherLoading = () => createSelector(
  selectTileDomain(),
  (substate) => substate.get('weather_loading')
);

const makeSelectTile = () => createSelector(
  selectTileDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTile;
export {
  selectTileDomain,
  makeSelectGetForecast,
  makeSelectGetForecastError,
  makeSelectGetForecastLoading,
  makeSelectGetWeather,
  makeSelectGetWeatherError,
  makeSelectGetWeatherLoading,
};
