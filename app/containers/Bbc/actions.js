/*
 *
 * Qq actions
 *
 */

import {
  CLICK_ACTION,
  DEFAULT_ACTION, FINISH_QUESTION_ACTION, INPUT_QUESTIONS, RESET_TIMER, START_TIMER, TICK, ZH, IMAGE_LOADED,
} from './constants';
import {FINISH_TEST} from "../Qq/constants";


export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function imageLoaded() {
  return {
    type: IMAGE_LOADED,
  };
}
export function inputQuestions(questions) {
  return {
    type: INPUT_QUESTIONS,
    questions,
  };
}
export function clickAction(clickId, posX, posY, screenWidth, screenHeight, relativePosX, relativePosY, relativeTime) {
  return {
    type: CLICK_ACTION,
    clickId,
    posX,
    posY,
    screenWidth,
    screenHeight,
    relativePosX,
    relativePosY,
    relativeTime,
  };
}
export function finishQuestionAction(lastClickId, totalTime) {
  return {
    type: FINISH_QUESTION_ACTION,
    lastClickId,
    totalTime,
  };
}
export function startTimerAction() {
  return {
    type: START_TIMER,
  };
}
export function tick() {
  return {
    type: TICK,
  };
}
export function resetTimer() {
  return {
    type: RESET_TIMER,
  };
}
export function languageZh() {
  return {
    type: ZH,
  };
}
export function finishTest(questions) {
  return {
    type: FINISH_TEST,
    questions,
  };
}
