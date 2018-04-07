/*
 *
 * homepage actions
 *
 */

import {
  START_TEST, TEST_READY,
} from './constants';

export function startTest(language, gender, age) {
  return {
    type: START_TEST,
    language,
    gender,
    age,
  };
}
export function testReady(language, site, questions, mainId) {
  return {
    type: TEST_READY,
    language,
    site,
    questions,
    mainId,
  };
}
