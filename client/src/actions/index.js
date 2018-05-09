import axios from 'axios';
import { FETCH_USER, FETCH_REQUESTED, SUBMIT_TOKEN } from './types';

export const fetchUserActionCreator = () => ({
  type: FETCH_REQUESTED,
});

export const handleTokenActionCreator = token => ({
  type: SUBMIT_TOKEN,
  payload: token,
});

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};
