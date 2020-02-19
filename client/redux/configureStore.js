import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createRootReducer from './reducer';

export const history = createBrowserHistory();

export default function configureStore(preloadState) {
  const isDev = process.env.NODE_ENV === 'development';
  const middleware = [
    routerMiddleware(history),
  ];

  if (isDev) {
    middleware.push(createLogger());
  }

  const store = createStore(
    createRootReducer(history),
    preloadState,
    compose(applyMiddleware(...middleware))
  );

  return store;
};
