
import { fromJS } from 'immutable';
import susReducer from '../reducer';

describe('susReducer', () => {
  it('returns the initial state', () => {
    expect(susReducer(undefined, {})).toEqual(fromJS({}));
  });
});
