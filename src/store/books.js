/* eslint-disable */

import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan} from './api'

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    list: {},
    loading: false,
  },
  reducers: {
    booksRequested: (books, action) => {
      books.loading = true;
    },
    booksReceived: (books, action) => {
      books.list = action.payload;
      books.loading = false;
    },
    addBook: (state, action) => {
      state.list.push({
        id: uuidv4().slice(0, 5),
        title: action.payload.title,
      });
    },
    removeBook: (state, action) => {
      const list = state.list.filter((book) => book.id !== action.payload.id);
      return { list };
    },
  },
});

export const { addBook, removeBook, booksReceived, booksRequested } = bookSlice.actions;

export default bookSlice.reducer;

//Action creatores
const url = '/books/'

export const loadBooks = () => apiCallBegan({
  url,
  onStart: booksRequested.type,
  onSuccess: booksReceived.type,
})



