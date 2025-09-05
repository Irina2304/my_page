import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter.filter;

export const selectContacts = state => state.contacts.contacts;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectvisibleItems = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
