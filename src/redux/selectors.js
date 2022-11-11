import { createSelector } from '@reduxjs/toolkit';

//  Filter selectors

export const selectFilter = state => state.filter;

// Contacts selectors

export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  }
);

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;
