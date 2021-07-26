import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import createRootReducer from '../reducers';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(), // root reducer
    preloadedState,
    compose(
      applyMiddleware(
        ...middlewares
      ),
    ),
  );
  return store;
}
