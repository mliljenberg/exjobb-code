/* eslint-disable no-case-declarations */
/*
 *
 * Qq reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CLICK_ACTION,
  FINISH_QUESTION_ACTION, RESET_TIMER, TICK, ZH,
} from './constants';
import { enQuestions, zhQuestions } from './content';

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
// TODO: kan va så att imutable listan och map måste deffineras vi märker det


const initialState = fromJS({
  questions: enQuestions,
  index: 0,
  finished: false,
  timer: 0,
  currentQuestion: 'bla,bla,bla',
});


function qqReducer(state = initialState, action) {
  switch (action.type) {
    case TICK:
      return state.updateIn(['timer'], (val) => val + 1);
    case ZH:
      return state.set('questions', zhQuestions);
    case RESET_TIMER:
      return state.set('timer', 0);
    case FINISH_QUESTION_ACTION:
      console.log(state);
      let state1 = state;
      if (action.lastClickId === state.get('currentQuestion')) {
        state1 = state1.setIn(['questions', state.get('index'), 'correct'], 1);
      }
      state1 = state1.setIn(['questions', state.get('index'), 'totalTime'], action.totalTime);
      state1 = state1.setIn(['questions', state.get('index'), 'endTime'], action.endTime);
      if (state.get('index') < 11) {
        state1 = state1.setIn(['questions', state.get('index') + 1, 'startTime'], action.startTime);
        state1 = state1.updateIn(['index'], (val) => val + 1);
        state1 = state1.set(['currentQuestion'], state1.getIn(['questions', state1.get('index'), 'questionText']));
      } else {
        state1 = state1.set('finished', true);
      }
      return state1;
    case CLICK_ACTION:
      console.log(clickAction(action.clickId, action.posX, action.posY, action.screenWidth, action.screenHeight, action.relativePosX, action.relativePosY, action.relativeTime));
      return state.updateIn(['questions', state.get('index'), 'actions'],
        (list) => list.push(clickAction(action.clickId, action.posX, action.posY, action.screenWidth, action.screenHeight, action.relativePosX, action.relativePosY, action.relativeTime)));
    default:
      return state;
  }
}

export default qqReducer;
