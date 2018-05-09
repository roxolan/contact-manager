import { combineReducers } from 'redux';
import ContactReducer from './contactReducer';

const reducers = {
  contactStore: ContactReducer
}

export default combineReducers(reducers);
