import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router } from 'react-router-dom';
import routes from './routes';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import '../styles/index.scss';
import history from './history';
import epics from './epics';

const rootEpic = combineEpics(
  epics.getExchange
);

const epicMiddleware = createEpicMiddleware(rootEpic);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore(initialState) {
  const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(epicMiddleware)));
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

const store = configureStore({});

const AppContainer = (
    <Provider store={store}>
      <Router history={history} children={routes} />
    </Provider>
);

const appDOMNode = document.getElementById('root');

ReactDOM.render(AppContainer, appDOMNode);
