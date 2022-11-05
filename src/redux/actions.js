import { nanoid } from 'nanoid';

export const addContact = ({ name, number }) => ({
  type: 'contacts/addContact',
  payload: { name, number, id: nanoid() },
});

export const deleteContact = id => ({
  type: 'contacts/deleteContact',
  payload: id,
});

export const setFilter = filter => ({
  type: 'filter/setFilter',
  payload: filter,
});
