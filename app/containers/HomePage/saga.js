import request from 'utils/request';

import { takeLatest, call, put } from 'redux-saga/effects';
import { START_TEST } from './constants';
import { testReady } from './actions';


export function* getData(action) {
  const result = yield call(request, 'main', { language: action.language });
  yield put(testReady(action.language, result.site, result.questions, result.mainId));
  console.info('Result from database: ', result);
}


export default function* homeSaga() {
  yield takeLatest(START_TEST, getData);

}

