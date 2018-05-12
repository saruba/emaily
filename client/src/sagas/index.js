import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';

import watchFetchUser from './authSaga';
import watchHandleToken from './stripeSaga';
import watchSubmitSurvey from './surveySaga';

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export default function* rootSaga() {
  yield all([
    watchIncrementAsync(),
    watchFetchUser(),
    watchHandleToken(),
    watchSubmitSurvey(),
  ]);
}
