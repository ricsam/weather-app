
import { fromJS } from 'immutable';
import tileReducer from '../reducer';

describe('tileReducer', () => {
  it('returns the initial state', () => {
    expect(tileReducer(undefined, {})).toEqual(fromJS({}));
  });
});
