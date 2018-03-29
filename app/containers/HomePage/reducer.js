import { fromJS } from 'immutable';

import {
  TEST_READY,
} from './constants';

const initialState = fromJS({
  language: '',
  site: '',
  ready: false,
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case TEST_READY:
      return state
        .set('language', action.language).set('site', action.site).set('ready', true).set('questions', fromJS(action.questions));
    default:
      return state;
  }
}

export default homePageReducer;
