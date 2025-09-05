import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  fetchAddContact,
  fetchDelContact,
} from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchAllContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchAllContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchAllContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchAddContact.pending](state) {
      state.isLoading = true;
    },
    [fetchAddContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [fetchAddContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchDelContact.pending](state) {
      state.isLoading = true;
    },
    [fetchDelContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const index = state.contacts.findIndex(
        item => item.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [fetchDelContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReduser = contactsSlice.reducer;
