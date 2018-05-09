import { FETCH_CONTACTS_FULFILLED, ADD_CONTACT } from '../constants/actionTypes';

const initialState = {
  contacts: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_CONTACTS_FULFILLED:
      return {
        ...state,
        contacts: action.payload.data.data || action.payload.data };
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    default:
      return state;
  }
};
