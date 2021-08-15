/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    list: {},
    loading: false,
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
  addBook,
  removeBook,
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

// export const getBooks = createSelector(
//   (state) => state.entities.books.list.results,
// );
