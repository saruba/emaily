import { FETCH_SURVEYS, FETCH_SURVEYS_SUCCEEDED } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SURVEYS:
    case FETCH_SURVEYS_SUCCEEDED:
      return action.payload;
    default:
      return state;
  }
}
