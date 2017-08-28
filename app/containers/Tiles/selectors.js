import { createSelector } from 'reselect';

/**
 * Direct selector to the tiles state domain
 */
const selectTilesDomain = () => (state) => state.get('tiles');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Tiles
 */

const makeSelectTiles = () => createSelector(
  selectTilesDomain(),
  (substate) => substate ? substate.toJS() : {}
);

export default makeSelectTiles;
export {
  selectTilesDomain,
};
