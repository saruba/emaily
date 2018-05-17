import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import counterReducer from './counterReducer';
import surveysReducer from './surveysReducer';

export default combineReducers({
  auth: authReducer,
  counter: counterReducer,
  surveys: surveysReducer,
  form: formReducer,
});
