/*
 *
 * Test reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SAVE_TO_DB,
} from './constants';

const initialState = fromJS({
  testar: ['something'],
});

function testReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TO_DB:
      return state.set('testar', [...state.get('testar'), action.type]);
    default:
      return state;
  }
}

export default testReducer;
