import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import myReducer from './my_reducer';

const rootReducer = combineReducers({
  myreducer: myReducer,
});

const store = createStore(
	rootReducer,
	{},
	applyMiddleware(thunk),
);

export default store;
