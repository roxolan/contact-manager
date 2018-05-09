import { contacts } from '../../../backend/contacts-data'

import { FETCH_CONTACTS, ADD_CONTACT } from '../constants/actionTypes';

export const fetchContacts = () => {
  return dispatch => {
    dispatch({
      type: FETCH_CONTACTS,
      payload: contacts
    })
  }
}

export const addContact = contact => ({ type: ADD_CONTACT, payload: contact });
