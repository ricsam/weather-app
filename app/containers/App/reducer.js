import { fromJS } from 'immutable';
import { GET_TILES, SAVE_TILES, SET_TILES, PUSH_TILE, REMOVE_TILE } from './constants';

const initialState = fromJS({
  tiles: false,
});


function appReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TILES: /* will 'download' localStorage */
      return state;
    case SET_TILES: /* When the localStorage is downloaded this action will be dispatched */
      return state.set('tiles', action.tiles);
    case SAVE_TILES: /* will 'upload' localStorage */
      console.log(state.toJSON());
      return state;
    case PUSH_TILE:
      if ( ! state.get('tiles') ) return state.set('tiles', [action.tile]);
      return state.set('tiles', state.get('tiles').concat([action.tile]));
    case REMOVE_TILE:
      const tiles = state.get('tiles');
      if ( ! tiles ) return state;
      const index = tiles.indexOf(action.tile);
      if ( index < 0 ) return state;
      return state.set('tiles', [...tiles.slice(0, index), ...tiles.slice(index + 1)]);
    default:
      return state;
  }
}

export default appReducer;
