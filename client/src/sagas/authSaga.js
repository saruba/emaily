import { call, put, takeEvery } from 'redux-saga/effects';

import { FETCH_USER_SUCCEEDED, FETCH_USER_REQUESTED } from '../actions/types';

const fetchCurrentUser = async () => {
  const res = await fetch('/api/current_user');
  const json = await res.json();
  return json;
};

export function* fetchUser() {
  try {
    const data = yield call(fetchCurrentUser);
    yield put({ type: FETCH_USER_SUCCEEDED, payload: data });
  } catch (error) {
    yield put({ type: FETCH_USER_SUCCEEDED, payload: false });
  }
}

export default function* watchFetchUser() {
  yield takeEvery(FETCH_USER_REQUESTED, fetchUser);
}
