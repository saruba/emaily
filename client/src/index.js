// Data layer control (Redux)
import 'typeface-roboto'; // eslint-disable-line import/extensions

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import App from './components/App';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];
const middleware = [reduxThunk, sagaMiddleware];

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(reducers, initialState, composedEnhancers);

if (process.env.NODE_ENV !== 'production') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__; // eslint-disable-line no-underscore-dangle

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
