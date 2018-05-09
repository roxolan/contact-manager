import { ADD_CONTACT } from "../constants/actionTypes";

export const addContact = contact => ({ type: ADD_CONTACT, payload: contact });
