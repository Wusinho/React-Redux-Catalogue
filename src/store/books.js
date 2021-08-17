/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    loading: false,
    list: {},
  },
  reducers: {
    booksRequested: (books) => {
      books.loading = true;
    },
    booksReceived: (books, action) => {
      books.list = action.payload;
      books.loading = false;
    },
    booksRequestFailed: (books) => {
      books.loading = false;
    },
  },
});

export const {
  booksReceived,
  booksRequested,
  booksRequestFailed,
} = bookSlice.actions;

export default bookSlice.reducer;

const url = '/books';

export const loadBooks = () => apiCallBegan({
  url,
  onStart: booksRequested.type,
  onSuccess: booksReceived.type,
  onError: booksRequestFailed.type,
});
