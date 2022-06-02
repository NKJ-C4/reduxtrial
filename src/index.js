import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { changeQuestions, updateAnswers } from './reducers';
import "./index.css"
import { createLogger } from 'redux-logger';

const logger = createLogger();

const rootReducers = combineReducers({changeQuestions, updateAnswers});

const store = createStore(rootReducers, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

