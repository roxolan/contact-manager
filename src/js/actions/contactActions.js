import { contacts } from '../../../backend/contacts-data'
import { client } from './';
import { FETCH_CONTACTS, ADD_CONTACT } from '../constants/actionTypes';

const url = '/contacts';
console.log('client get from url:', client.get(url))

export const fetchContacts = () => {
  return dispatch => {
    dispatch({
      type: FETCH_CONTACTS,
      payload: client.get(url)
    })
  }
}

export const addContact = contact => ({ type: ADD_CONTACT, payload: contact });
