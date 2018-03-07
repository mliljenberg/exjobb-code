/*
 *
 * Qq actions
 *
 */

import {
  CLICK_ACTION,
  DEFAULT_ACTION, FINISH_QUESTION_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
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
export function finishQuestionAction(lastClickId, totalTime, endTime ) {
  return {
    type: FINISH_QUESTION_ACTION,
    lastClickId,
    totalTime,
    endTime,
    startTime: endTime,
  };
}
