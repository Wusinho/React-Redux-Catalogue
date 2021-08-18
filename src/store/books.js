/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

export const champSlice = createSlice({
  name: 'champs',
  initialState: {
    loading: false,
    list: {},
  },
  reducers: {
    champsRequested: (champs) => {
      champs.loading = true;
    },
    champsReceived: (champs, action) => {
      champs.list = action.payload;
      champs.loading = false;
    },
    champsRequestFailed: (champs) => {
      champs.loading = false;
    },
  },
});

export const {
  champsReceived,
  champsRequested,
  champsRequestFailed,
} = champSlice.actions;

export default champSlice.reducer;

const url = '/champs';

export const loadchamps = () => apiCallBegan({
  url,
  onStart: champsRequested.type,
  onSuccess: champsReceived.type,
  onError: champsRequestFailed.type,
});
