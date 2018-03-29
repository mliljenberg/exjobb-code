/*
 *
 * homepage actions
 *
 */

import {
  START_TEST, TEST_READY,
} from './constants';

export function startTest(language) {
  return {
    type: START_TEST,
    language,
  };
}
export function testReady(language, site, questions) {
  return {
    type: TEST_READY,
    language,
    site,
    questions,
  };
}
