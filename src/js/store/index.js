import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from '../reducers/index';

const middleware = applyMiddleware(promise(), thunk);

export default createStore(rootReducer, middleware);
