
import { fromJS } from 'immutable';
import bbcReducer from '../reducer';

describe('bbcReducer', () => {
  it('returns the initial state', () => {
    expect(bbcReducer(undefined, {})).toEqual(fromJS({}));
  });
});
