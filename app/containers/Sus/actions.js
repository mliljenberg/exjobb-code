/*
 *
 * Sus actions
 *
 */

import {
  FINISH_TEST,
} from './constants';

export function finishTestAction(answers) {
  return {
    type: FINISH_TEST,
    answers,
  };
}
