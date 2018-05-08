import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import ModelBasicExample from './components/modelBasicExample';
import App from './components/app';
import reducers from './reducers';
import HomepageLayout from './components/HomepageLayout';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <HomepageLayout />
  </Provider>
  , document.getElementById("root"));
