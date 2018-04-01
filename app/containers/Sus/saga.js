import { call, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { FINISH_TEST } from './constants';

export function* finishTestSaga(action) {
  console.log(action.answers);
  yield call(request, '/finish', action.answers);
}

export default function* runTimer() {
  yield takeLatest(FINISH_TEST, finishTestSaga);
}
