import { call, put, takeEvery } from 'redux-saga/effects';

import {
  FETCH_SURVEYS_REQUESTED,
  FETCH_SURVEYS_SUCCEEDED,
} from '../actions/types';

const getSurveys = async () => {
  const res = await fetch('/api/surveys');
  const json = await res.json();
  return json;
};

export function* fetchSurveys(action) {
  try {
    const data = yield call(getSurveys, action.payload);
    yield put({ type: FETCH_SURVEYS_SUCCEEDED, payload: data });
  } catch (error) {
    yield put({ type: FETCH_SURVEYS_SUCCEEDED, payload: [] });
  }
}

export default function* watchFetchSurveys() {
  yield takeEvery(FETCH_SURVEYS_REQUESTED, fetchSurveys);
}
