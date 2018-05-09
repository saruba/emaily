import { FETCH_USER, FETCH_SUCCEEDED } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_SUCCEEDED:
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
