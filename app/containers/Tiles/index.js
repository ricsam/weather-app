/*
 *
 * Tiles
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectTiles from './selectors';

import { makeSelectLoadingTile_success } from 'containers/App/selectors';

import {
  Container,
  Col,
  Row
} from 'reactstrap';

import Tile from 'containers/Tile';

export class Tiles extends React.Component { // eslint-disable-line react/prefer-stateless-function
  generateTiles(tiles) {

    return tiles.reduce((arr, item, index) => {
      if ( ! (index % 2) ) {
        arr.push([]);
      }
      arr[arr.length - 1] = arr[arr.length - 1].concat([item]);
      return arr;
    }, [])

    .map((items, i) => {
      return (
        <Row key={i}>
          {items.map((item, u) => {
            return <Col sm="6" key={u}><Tile weatherStation={item} /></Col>
          })}
        </Row>
      )
    });
  }

  render() {
    console.log(this.props.tiles);
    return (
      <Container>
        {this.props.tiles &&
          this.generateTiles(this.props.tiles)
        }
      </Container>
    );
  }
}

Tiles.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tiles: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
};

const mapStateToProps = createStructuredSelector({
  TilesState: makeSelectTiles(),
  tiles: makeSelectLoadingTile_success(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tiles);
