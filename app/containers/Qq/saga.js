import { takeLatest, call, put, all } from 'redux-saga/effects';

import request from 'utils/request';
import { FINISH_TEST, START_TIMER } from './constants';
import { resetTimer, tick } from './actions';

const wait = (ms) => (
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  })
);

export function* timer() {
  yield put(resetTimer());
  while (true) {
    yield call(wait, 1000);
    yield put(tick());
  }
}

export function* finishTestSaga(action) {
  yield all(action.questions.map((question) => call(request, '/question', { question })));
}

export default function* runTimer() {
  yield takeLatest(START_TIMER, timer);
  yield takeLatest(FINISH_TEST, finishTestSaga);
}

