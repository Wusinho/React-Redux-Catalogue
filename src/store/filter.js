/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const booksFiltered = createSlice({
  name: 'filter',
  initialState: 'All',
  reducers: {
    booksFilter: (state) => {
      state.filter((book) => book.tags);
    },
  },
});

export const {
  booksFilter,
} = booksFiltered.actions;

export default booksFiltered.reducer;
