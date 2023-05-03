import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from 'services/services';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  
  extraReducers: builder => {
    builder
    .addCase(getContacts.fulfilled, (state, { payload }) => {
      state.items = payload
    })

    .addCase(addContact.fulfilled, (state, { payload }) => {
      state.items.push(payload)
    })

    .addCase(deleteContact.fulfilled, (state, { payload }) => {
      state.items = state.items.filter(
        contact => contact.id !== payload.id
      )
    })

    .addMatcher(action => action.type.endsWith('/pending'), handlePending)
    .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
    .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
  }
});

export const contactsReducer = contactsSlice.reducer;