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
    booksReceived: (books, action) => {
      books.list = action.payload;
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

export const { addBook, removeBook, booksReceived } = bookSlice.actions;

export default bookSlice.reducer;

//Action creatores
const url = '/books/'

export const loadBooks = () => apiCallBegan({
  url,
  onSuccess: booksReceived.type,
})



