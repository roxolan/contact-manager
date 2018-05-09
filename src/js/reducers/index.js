import { FETCH_CONTACTS, ADD_CONTACT } from '../constants/actionTypes';

const initialState = {
  contacts: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case FETCH_CONTACTS:
    return { ...state, contacts: action.payload };
  case ADD_CONTACT:
    return { ...state, contacts: [...state.contacts, action.payload] };
  default:
    return state;
  }
};
