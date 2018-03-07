/*
 *
 * Qq reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CLICK_ACTION,
  DEFAULT_ACTION, FINISH_QUESTION_ACTION,
} from './constants';

const clickAction = (clickId, posX, posY, screenWidth, screenHeight, relativePosX, relativePosY, relativeTime) => ({
  clickId,
  posX,
  posY,
  screenWidth,
  screenHeight,
  relativePosX,
  relativePosY,
  relativeTime,
});
const questions = [{
  questionText: 'bla,bla,bla',
  actions: [],
  correct: 0,
  correctId: '1',
  startTime: 0,
  endTime: 0,
  totalTime: 0,
}];

const initialState = fromJS({
  language: 'en',
  questions,
  index: 0,
  finished: false,
});

function qqReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case FINISH_QUESTION_ACTION:
      if (action.lastClickId === state.get('current_question').correctId) {
        state.set(state.get('questions')[state.get('index')].correct, 1);
      }
      state.set(state.get('questions')[state.get('index')].totalTime, action.totalTime);
      state.set(state.get('questions')[state.get('index')].endTime, action.endTime);
      if (state.get('index') < 11) {
        state.set(state.get('questions')[state.get('index') + 1].startTime, action.startTime);
        state.set(state.get('index'), state.get('index') + 1);
      } else {
        state.set(state.get('finished', true));
      }
      return state;
    case CLICK_ACTION:
      return state.set(state.get('questions')[state.get('index')], [...state.get('questions')[state.get('index')].actions, clickAction(action.clickId, action.posX, action.posY, action.screenWidth, action.screenHeight, action.relativePosX, action.relativePosY, action.relativeTime)]);
    default:
      return state;
  }
}

export default qqReducer;
