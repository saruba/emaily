import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import counterReducer from './counterReducer';

export default combineReducers({
  auth: authReducer,
  counter: counterReducer,
  form: formReducer,
});
