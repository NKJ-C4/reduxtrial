import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { changeQuestions } from './reducers';

const store = createStore(changeQuestions)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

