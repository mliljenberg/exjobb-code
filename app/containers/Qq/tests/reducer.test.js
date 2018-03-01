
import { fromJS } from 'immutable';
import qqReducer from '../reducer';

describe('qqReducer', () => {
  it('returns the initial state', () => {
    expect(qqReducer(undefined, {})).toEqual(fromJS({}));
  });
});
