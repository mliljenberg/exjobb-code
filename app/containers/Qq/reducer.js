/* eslint-disable no-case-declarations */
/*
 *
 * Qq reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CLICK_ACTION,
  FINISH_QUESTION_ACTION, IMAGE_LOADED, RESET_TIMER, TICK, ZH,
} from './constants';
import {INPUT_QUESTIONS} from "../Bbc/constants";

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
const questionsZh = [{
  question: 'bla,bla,bla',
  actions: [],
  correct: 0,
  correctText: '1',
  startTime: 0,
  endTime: 0,
  totalTime: 0,
},
{
  question: 'ksjfasökdjfhöaksdjföaskdfjhöaksdjf',
  actions: [],
  correct: 0,
  correctText: '1',
  startTime: 0,
  endTime: 0,
  totalTime: 0,
}];
const questions = [{
  question: 'bla,bla,bla',
  actions: [],
  correct: 0,
  correctText: '1',
  startTime: 0,
  endTime: 0,
  totalTime: 0,
}];

const initialState = fromJS({
  questions: [],
  index: 0,
  finished: false,
  timer: 0,
  currentQuestion: 'bla,bla,bla',
  correctText: 'abc',
  imagesLoaded: 0,
});


function qqReducer(state = initialState, action) {
  switch (action.type) {
    case TICK:
      return state.updateIn(['timer'], (val) => val + 1);
    case IMAGE_LOADED:
      return state.updateIn(['imagesLoaded'], (val) => val + 1);
    case INPUT_QUESTIONS:
      let state2 = state;
      state2 = state2.set('questions', fromJS(action.questions));
      state2 = state2.set('currentQuestion', action.questions[0].question);
      state2 = state2.set('correctText', action.questions[0].correctText);
      return state2;
    case RESET_TIMER:
      return state.set('timer', 0);
    case FINISH_QUESTION_ACTION:
      console.log(state);
      let state1 = state;
      if (action.lastClickId === state.get('correctText')) {
        state1 = state1.setIn(['questions', state.get('index'), 'correct'], 1);
      }
      const currentdate = new Date();
      state1 = state1.setIn(['questions', state.get('index'), 'totalTime'], action.totalTime);
      state1 = state1.setIn(['questions', state.get('index'), 'endTime'], `${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`);
      if (state.get('index') < 12) {
        state1 = state1.setIn(['questions', state.get('index') + 1, 'startTime'], `${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`);
        state1 = state1.updateIn(['index'], (val) => val + 1);
        state1 = state1.set('currentQuestion', state1.getIn(['questions', state1.get('index'), 'question']));
        state1 = state1.set('correctText', state1.getIn(['questions', state1.get('index'), 'correctText']));
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
