import {
  createStore, combineReducers,
} from 'redux';

import * as reducers from './reducers';

const App = combineReducers(reducers);

const store = createStore(App);

export default store