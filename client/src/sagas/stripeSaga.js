import { call, put, takeEvery } from 'redux-saga/effects';

import { FETCH_USER_SUCCEEDED, SUBMIT_TOKEN } from '../actions/types';

const submitToken = async token => {
  const res = await fetch('/api/stripe', {
    method: 'POST',
    body: JSON.stringify(token),
    headers: {
      'content-type': 'application/json',
    },
  });
  const json = await res.json();
  return json;
};

export function* handleToken(action) {
  try {
    const data = yield call(submitToken, action.payload);
    yield put({ type: FETCH_USER_SUCCEEDED, payload: data });
  } catch (error) {
    yield put({ type: FETCH_USER_SUCCEEDED, payload: false });
  }
}

export default function* watchHandleToken() {
  yield takeEvery(SUBMIT_TOKEN, handleToken);
}
