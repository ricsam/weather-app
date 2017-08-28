import { take, call, put, select, cancel, takeLatest, takeEvery } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { SAVE_TILES, GET_TILES } from 'containers/App/constants';
import { setTiles } from 'containers/App/actions';

import { makeSelectLoadingTile_success as makeSelectReadTiles } from './selectors';

export function* saveTiles() {
  let tiles = yield select(makeSelectReadTiles());
  try {
    window.localStorage.setItem('tiles', JSON.stringify(tiles));
  } catch (err) {
    console.log('Error when saving tiles: localStorage not enabled');
  }
}

export function* downloadTiles() {
  let tiles = false;
  console.log(213);
  try {
    tiles = window.localStorage.getItem('tiles');
    if (tiles) {
      tiles = JSON.parse(tiles);
    } else {
      tiles = false
    }
  } catch (err) {
    console.log('Error when downloading tiles: localStorage not enabled');
  }
  yield put(setTiles(tiles));
}



export function* appSaga() {
  yield takeEvery(SAVE_TILES, saveTiles);

  const watcher = yield takeLatest(GET_TILES, downloadTiles);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


export default [
  appSaga,
];
