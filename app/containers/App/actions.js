import { GET_TILES, SAVE_TILES, SET_TILES, REMOVE_TILE, PUSH_TILE } from './constants';

export function downloadTiles() {
  return {
    type: GET_TILES,
  };
}

export function getTiles() { /* alias */
  return {
    type: GET_TILES,
  };
}

export function saveTiles() {
  return {
    type: SAVE_TILES,
  };
}

export function setTiles(tiles) {
  return {
    type: SET_TILES,
    tiles,
  };
}
export function removeTile(tile) {
  return {
    type: REMOVE_TILE,
    tile
  }
}
export function pushTile(tile) {
  return {
    type: PUSH_TILE,
    tile
  }
}

