import { fromJS } from 'immutable';

import {
  TEST_READY,
} from './constants';

const initialState = fromJS({
  language: '',
  site: '',
  ready: false,
  mainId: -1,
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case TEST_READY:
      return state
        .set('language', action.language).set('site', action.site).set('ready', true).set('questions', fromJS(action.questions)).set('mainId', action.mainId);
    default:
      return state;
  }
}

export default homePageReducer;
