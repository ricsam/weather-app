
import { fromJS } from 'immutable';
import tilesReducer from '../reducer';

describe('tilesReducer', () => {
  it('returns the initial state', () => {
    expect(tilesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
