/*
 *
 * Test actions
 *
 */

import {
  SAVE_TO_DB,
  SEND_TO_DB,
} from './constants';


export function saveToDB() {
  return {
    type: SAVE_TO_DB,
  };
}

export function sendToDB() {
  return {
    type: SEND_TO_DB,
  };
}
