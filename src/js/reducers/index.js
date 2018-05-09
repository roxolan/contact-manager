import { combineReducers } from 'redux';
import ContactReducer from './contactReducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  contactStore: ContactReducer,
  form: formReducer
}

export default combineReducers(reducers);
