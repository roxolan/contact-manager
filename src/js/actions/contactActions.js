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

export const newContact = () => {
  return dispatch => {
    dispatch({
      type: 'NEW_CONTACT'
    })
  }
}

export const saveContact = contact => {
  return dispatch => {
    return dispatch({
      type: 'SAVE_CONTACT',
      payload: client.post(url, contact)
    })
  }
}

export const addContact = contact => ({ type: ADD_CONTACT, payload: contact });
