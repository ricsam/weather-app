/*
 *
 * Search
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectSearch from './selectors';

import styled from 'styled-components';

import propTypes from './propTypes';

import {
  makeSelectLoadingGoogleAutocomplete_error,
  makeSelectLoadingGoogleAutocomplete_success,
  makeSelectLoadingGoogleAutocomplete_initialize,
  makeSelectApixuSearch_error,
  makeSelectApixuSearch_success,
  makeSelectApixuSearch_initialize,
} from './selectors';

import {
  setAutocompleteValue,
  setAutocompleteCarretPosition,
  setWeatherStationLocation,
  setWeatherStation,

  requestApixuSearch,
  requestAutocomplete,
} from './actions';

import {
  saveTiles,
  downloadTiles,
  pushTile,
} from 'containers/App/actions';

import {
  Input as bsInput,
  ListGroup as bsListGroup,
  ListGroupItem as bsListGroupItem,
  InputGroup as bsInputGroup,
  InputGroupAddon as bsInputGroupAddon,
} from 'reactstrap';

const InputGroup = styled(bsInputGroup)`
  padding: 5px;
  background-color: white;
  border-radius: 2px;
`;
const InputGroupAddon = styled(bsInputGroupAddon)`
  background: white;
  font-weight: bold;
  border: none;
  color: #4a4a4a;
`;
const ListGroup = styled(bsListGroup)`
`;

const ListGroupItem = styled(bsListGroupItem)`
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

const Input = styled(bsInput)`
  opacity: ${props => props['data-done'] ? '0.5' : '1'};
  cursor: ${props => props['data-done'] ? 'pointer' : 'text'};
  border-width: 0 0 0 0;
  color: #4a4a4a;
`;

const autoCompleteItems = (props, click) => {
  if ( ! props ) return false;

  return props.map((result, i) => {
    const desc = result.description;
    return (
      <ListGroupItem key={i} onClick={((item) => {click(item)}).bind(null, desc)}>{desc}</ListGroupItem>
    );
  });
};


import { makeSelectLoadingTile_success } from 'containers/App/selectors';

export class Search extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      carretPosition: 0,
      weatherStationLocationSelected: false,
    };
  }
  componentDidMount() {
    this.props.downloadTiles();
  }

  locationChange(ev) {
    const location = ev.currentTarget.value,
          carretPosition = ev.currentTarget.selectionStart;

    this.setState({
      location,
      carretPosition,
      weatherStationLocationSelected: false
    });


    /* in case the user types the full name insted of clicks the autocomplete */
    if (this.props.autocompleteResults) {

      let found = false;
      let item_index = null;
      this.props.autocompleteResults.forEach((item, i) => {
        if ( found ) return;
        if (location.replace(/\s+$/g, '') === item.description) {
          found = true;
          item_index = i;
        }
      });

      if (found) {
        return this.weatherStationLocationSelected(
          location
        );
      }

    }

    this.props.setAutocompleteCarretPosition(carretPosition);
    this.props.setAutocompleteValue(location);

    this.props.requestAutocomplete();

  }

  weatherStationLocationSelected(item) {
    console.log(item);
    this.setState({
      location: item,
      carretPosition: item.length,
      weatherStationLocationSelected: true,
    });
    this.props.setWeatherStationLocation(item);
    this.props.requestApixuSearch();
  }

  componentWillReceiveProps(nextProps) {}

  locationInputClick(ev) {
    if ( this.state.weatherStationLocationSelected ) {
      this.setState({
        weatherStationLocationSelected: false
      });
    }
  }

  selectWeatherStation(name, ev) {
    // reset state
    this.setState({
      location: '',
      carretPosition: 0,
      weatherStationLocationSelected: false,
    });

    this.props.setWeatherStation(name);
    this.props.pushTile(name);
    this.props.saveTiles(name);
    console.log(this.props.tiles);
  }

  render() {

    return (
      <div>
        <InputGroup>
          <InputGroupAddon>Location:</InputGroupAddon>
          <Input placeholder="Enter a location" onChange={this.locationChange.bind(this)} data-done={this.state.weatherStationLocationSelected} value={this.state.location} onClick={this.locationInputClick.bind(this)}/>
        </InputGroup>
        {this.props.autocompleteLoading &&
         <span>Autocomplete is loading</span>
        }
        {this.state.location && this.props.autocompleteResults && ! this.state.weatherStationLocationSelected && (
          <div>
            <p>Please select a location...</p>
            <ListGroup>
              {autoCompleteItems(
                this.props.autocompleteResults,
                this.weatherStationLocationSelected.bind(this)
              )}
            </ListGroup>
          </div>
        )}
        {this.state.weatherStationLocationSelected && ! this.props.searchResults && (
          <div>
            <p>Loading weather stations...</p>
          </div>
        )}

        {this.state.weatherStationLocationSelected && this.props.searchResults && (
          <div>
            <p>Please select a weather station:</p>
            <ListGroup>
              {this.props.searchResults.map((item, i) => {
                return <ListGroupItem key={i} disabled={ this.props.tiles ? this.props.tiles.indexOf(item.name) > -1 : false} onClick={this.selectWeatherStation.bind(this, item.name)}>{item.name}</ListGroupItem>
              })}
            </ListGroup>
          </div>
        )}
        <pre>{/*JSON.stringify(this.props.tiles, true, 2)*/}</pre>
        <pre>{/*JSON.stringify(this.props.autocompleteResults, true, 2)*/}</pre>
      </div>
    );
  }
}

Search.propTypes = propTypes;

const mapStateToProps = createStructuredSelector({
  Search: makeSelectSearch(),
  tiles: makeSelectLoadingTile_success(),
  autocompleteError: makeSelectLoadingGoogleAutocomplete_error(),
  autocompleteResults: makeSelectLoadingGoogleAutocomplete_success(),
  autocompleteLoading: makeSelectLoadingGoogleAutocomplete_initialize(),
  searchError: makeSelectApixuSearch_error(),
  searchResults: makeSelectApixuSearch_success(),
  searchLoading: makeSelectApixuSearch_initialize(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    requestApixuSearch: () => dispatch(requestApixuSearch()),
    requestAutocomplete: () => dispatch(requestAutocomplete()),
    setAutocompleteValue: (value) => dispatch(setAutocompleteValue(value)),
    setAutocompleteCarretPosition: (value) => dispatch(setAutocompleteCarretPosition(value)),
    setWeatherStationLocation: (value) => dispatch(setWeatherStationLocation(value)),
    setWeatherStation: (value) => dispatch(setWeatherStation(value)),
    pushTile: (tile) => dispatch(pushTile(tile)),
    saveTiles: () => dispatch(saveTiles()),
    downloadTiles: () => dispatch(downloadTiles())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
