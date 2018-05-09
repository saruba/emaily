import { call, put, takeEvery } from 'redux-saga/effects';

import { FETCH_SUCCEEDED, FETCH_REQUESTED } from '../actions/types';

const fetchCurrentUser = async () => {
  const res = await fetch('/api/current_user');
  const json = await res.json();
  return json;
};

export function* fetchUser() {
  try {
    const data = yield call(fetchCurrentUser);
    yield put({ type: FETCH_SUCCEEDED, payload: data });
  } catch (error) {
    yield put({ type: FETCH_SUCCEEDED, payload: false });
  }
}

export default function* watchFetchUser() {
  yield takeEvery(FETCH_REQUESTED, fetchUser);
}
