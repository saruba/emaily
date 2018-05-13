import { call, put, takeEvery } from 'redux-saga/effects';

import { FETCH_SUCCEEDED, SUBMIT_SURVEY } from '../actions/types';

const postSurvey = async values => {
  const res = await fetch('/api/surveys', {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      'content-type': 'application/json',
    },
  });
  const json = await res.json();
  return json;
};

export function* submitSurvey(action) {
  try {
    const data = yield call(postSurvey, action.payload);
    yield put({ type: FETCH_SUCCEEDED, payload: data });
    action.history.push('/surveys');
  } catch (error) {
    yield put({ type: FETCH_SUCCEEDED, payload: false });
  }
}

export default function* watchSubmitSurvey() {
  yield takeEvery(SUBMIT_SURVEY, submitSurvey);
}
