import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import Reducers from './reducers';

const middleware = [thunk];
const initialState = {};

export const Store = createStore(Reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));