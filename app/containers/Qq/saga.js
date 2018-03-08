import { takeLatest, call, put } from 'redux-saga/effects';
import { START_TIMER } from './constants';
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


export default function* runTimer() {
  yield takeLatest(START_TIMER, timer);
}

