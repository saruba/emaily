import { FETCH_USER, FETCH_USER_SUCCEEDED } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER_SUCCEEDED:
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
