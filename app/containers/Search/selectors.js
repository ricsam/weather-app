import { createSelector } from 'reselect';

/**
 * Direct selector to the search state domain
 */
const selectSearchDomain = () => (state) => state.get('search');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Search
 */

const makeSelectSearch = () => createSelector(
  selectSearchDomain(),
  (substate) => substate ? substate.toJS() : {}
);

const makeSelectLoadingGoogleAutocomplete_error = () => createSelector(
  selectSearchDomain(),
  (substate) => substate.get('autocomplete_error')
);
const makeSelectLoadingGoogleAutocomplete_success = () => createSelector(
  selectSearchDomain(),
  (substate) => substate.get('autocomplete')
);
const makeSelectLoadingGoogleAutocomplete_initialize = () => createSelector(
  selectSearchDomain(),
  (substate) => substate.get('autocomplete_loading')
);

const makeSelectApixuSearch_error = () => createSelector(
  selectSearchDomain(),
  (substate) => substate.get('apixusearch_error')
);
const makeSelectApixuSearch_success = () => createSelector(
  selectSearchDomain(),
  (substate) => substate.get('apixusearch')
);
const makeSelectApixuSearch_initialize = () => createSelector(
  selectSearchDomain(),
  (substate) => substate.get('autocomplete_loading')
);

const makeSelectAutocompletionInput = () => createSelector(
  selectSearchDomain(),
  (substate) => substate.get('autocomplete_value')
);

const makeSelectWeatherStationLocation = () => createSelector(
  selectSearchDomain(),
  (substate) => substate.get('weather_station_location')
);

const makeSelectWeatherStation = () => createSelector(
  selectSearchDomain(),
  (substate) => substate.get('weather_station')
);

const makeSelectGetAutocompleteCarretPosition = () => (
  selectSearchDomain(),
  (substate) => substate.get('autocomplete_carret_position')
);

export default makeSelectSearch;
export {
  selectSearchDomain,
  makeSelectLoadingGoogleAutocomplete_error,
  makeSelectLoadingGoogleAutocomplete_success,
  makeSelectLoadingGoogleAutocomplete_initialize,
  makeSelectApixuSearch_error,
  makeSelectApixuSearch_success,
  makeSelectApixuSearch_initialize,

  makeSelectAutocompletionInput,
  makeSelectGetAutocompleteCarretPosition,
  makeSelectWeatherStationLocation,
  makeSelectWeatherStation,
};
