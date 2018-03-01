import { take, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';

// Individual exports for testing

import { SEND_TO_DB } from './constants';

import {saveToDB} from "./actions";

export default function* dbTest() {
  console.log('verkar som sagan startas...');
  while (true) {
    yield take(SEND_TO_DB);
    console.log('evented fångades upp');
    const result = yield call(request, 'test');
    console.info('saga result', result);
    yield put(saveToDB());
  // put a action as well... that might update store or something
  }
}
