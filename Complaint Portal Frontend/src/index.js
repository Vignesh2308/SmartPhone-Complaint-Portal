import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import createSagaMiddleWare from 'redux-saga';
import history from './utils/history';
import saga from './store/sagas/index';
import reducer from './store/reducers/index';

const sagaMiddleWare = createSagaMiddleWare();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer,applyMiddleware(sagaMiddleWare));
export const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(sagaMiddleWare))
);
sagaMiddleWare.run(saga);
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
