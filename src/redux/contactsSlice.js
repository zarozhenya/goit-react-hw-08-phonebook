import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    list: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.list.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      state.list = state.list.filter(contact => contact.id !== action.payload);
    },
  },
});

const persistConfig = { key: 'contacts', storage };

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

// Selectors

export const getContacts = state => state.contacts.list;

export const { addContact, deleteContact } = contactsSlice.actions;
