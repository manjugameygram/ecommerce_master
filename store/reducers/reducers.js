
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const initStore = (preloadedState = initialState) => {
    return createStore(
        reducers,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
}
  