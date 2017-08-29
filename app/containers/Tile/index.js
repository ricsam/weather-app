/*
 *
 * Tile
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectTile from './selectors';
import {
  Card as bsCard,
  Button,
  CardTitle as bsCardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col
} from 'reactstrap';

import {

  removeTile,
  saveTiles,

} from 'containers/App/actions';

import styled from 'styled-components';

const Icon = styled.span`
  font-family: 'meteoconsregular';
  font-size: 120px;
  float: left;
  display: block;
  width: 120px;
  height: 120px;
  margin-top: 40px;
`;

const Card = styled(bsCard)`
  max-width: 450px;
  margin-bottom: 15px;
`;

const CardTitle = styled(bsCardTitle)`
  clear: both;
`;

const Temperature = styled.span`
  font-size: 80px;
  position: relative;

  &:after {
    font-size: 20px;
    font-weight: bold;
    content: "°C"
    position: relative;
    top: -40px;
  }
  display: block;
  width: 100%;
  text-align: left;
  top: 15px;

  @media (min-width: 992px) {
    top: 65px;
    display: inline;
    font-size: 120px;
    &:after {
      top: -70px;
    }
  }
`;

const FAIconClose = styled.span`
  float: right;
  position: absolute;
  right: 15px;
  top: 15px;
  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const Title = styled.span`
  float: left;
  padding-right: 18px;
`;

const Loading = styled.i`
  font-size: 50px;
  display: block;
  text-align: center;
`;

const TextCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;


import request from 'utils/request';

function apixuRequest(weatherStationLocation, api) {

  return location.protocol
    + "//api.apixu.com/v1/" + api + ".json?key=d7c304d679df4b96a60233450172508&q="
    + weatherStationLocation;


}

async function requestForecast(station) {

  const requestURL = apixuRequest(station, 'forecast');

  try {
    const forecast = await request(requestURL, {mode: 'cors'});
    console.log(forecast);
    return {forecast: forecast.forecast};
  } catch (error) {
    return {error};
  }
}
async function requestWeather(station) {

  const requestURL = apixuRequest(station, 'current');

  try {
    const weather = await request(requestURL, {mode: 'cors'});
    return {weather};
  } catch (error) {
    return {error};
  }
}


export class Tile extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      weather: false,
      forecast: false,
      weatherLoading: false,
      forecastLoading: false,
      forecastError: false,
      weatherError: false
    };
  }

  close() {
    this.props.removeTile(this.props.weatherStation);
    this.props.saveTiles();
  }
  componentDidMount() {
    this.getWeather();
  }

  getWeather(station = this.props.weatherStation) {
    this.setState({
      weatherLoading: true,
    });
    requestWeather(station).then(this.setWeather.bind(this));
  }
  getForecast(station = this.props.weatherStation) {
    this.setState({
      forecastLoading: true,
    });
    requestForecast(station).then(this.setForecast.bind(this));
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, this.props);
    if (nextProps.weatherStation !== this.props.weatherStation) {
      this.getWeather(nextProps.weatherStation);
      if (this.state.forecast) {
        this.getForecast(nextProps.weatherStation);
      }
    }
  }

  setWeather(action) {
    if (action.error) {
      this.setState({
        weatherLoading: false,
        weatherError: error,
      });
    } else {
      this.setState({
        weatherLoading: false,
        weather: action.weather
      });
    }
  }
  setForecast(action) {
    if (action.error) {
      this.setState({
        forecastLoading: false,
        forecastError: error,
      });
    } else {
      this.setState({
        forecastLoading: false,
        forecast: action.forecast
      });
    }
  }


  render() {
    return (
      <Card block>
        <CardTitle>
          <FAIconClose onClick={this.close.bind(this)} className="fa fa-times-circle"></FAIconClose>
          <Title>
            {this.props.weatherStation}
          </Title>
        </CardTitle>
        <CardText>
          {this.state.weatherLoading &&
            <Loading className="fa fa-spinner fa-spin" />
          }
          {!this.state.weatherLoading && this.state.weather && (
            <span>
              {this.state.weather.current.condition.text}
              <img src={this.state.weather.current.condition.icon} />
              <Temperature>{this.state.weather.current.temp_c}</Temperature>
              <br />
              <Button onClick={this.getForecast.bind(this, this.props.weatherStation)}>Forecast</Button>
            </span>
          )}
        </CardText>
        {this.state.forecastLoading &&
          <Loading className="fa fa-spinner fa-spin" />
        }
        {!this.state.forecastLoading && this.state.forecast && (<div>
          <ListGroup>
            {this.state.forecast.forecastday.map((item, i) => {
              return (
                <ListGroupItem key={i}>
                  <Container fluid>
                    <Row>
                      <TextCol>
                        <img src={item.day.condition.icon} />
                        {item.day.avgtemp_c}°C
                      </TextCol>
                      <TextCol>
                        <span>{item.day.condition.text}</span>
                      </TextCol>
                      <TextCol>
                        {item.date}
                      </TextCol>
                    </Row>
                  </Container>
                </ListGroupItem>
              );
            })}
          </ListGroup>

        </div>)}
      </Card>
    );
  }
}

Tile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  removeTile: PropTypes.func,
  saveTiles: PropTypes.func,
};



const mapStateToProps = createStructuredSelector({
  Tile: makeSelectTile(),
});



function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    removeTile: (tile) => dispatch(removeTile(tile)),
    saveTiles: (tile) => dispatch(saveTiles(tile)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
