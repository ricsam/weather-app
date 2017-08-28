import {PropTypes} from 'React'
const propTypes = {
  dispatch: PropTypes.func.isRequired,
  tiles: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  autocompleteError: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  autocompleteResults: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  autocompleteLoading: PropTypes.bool,
  searchError: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  searchResults: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  searchLoading: PropTypes.bool,
  setAutocompleteValue: PropTypes.func,
  setAutocompleteCarretPosition: PropTypes.func,
  setWeatherStationLocation: PropTypes.func,
  setWeatherStation: PropTypes.func,
  saveTiles: PropTypes.func,
  downloadTiles: PropTypes.func,
  requestApixuSearch: PropTypes.func,
  requestAutocomplete: PropTypes.func,
};

export default propTypes;
