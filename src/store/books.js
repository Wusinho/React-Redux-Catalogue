/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';
import { createSelector } from 'reselect';

export const champSlice = createSlice({
  name: 'champs',
  initialState: {
    loading: false,
    list: {},
    champSelection: null,
    category: 'All',
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
    champSelection: (champs, action) =>{
      champs.champSelection = action.payload;
    },
    champCategory: (champs, action) => {
      champs.category = action.payload;
    }
  },
});

export const {
  champsReceived,
  champsRequested,
  champsRequestFailed,
  champSelection,
  champCategory,
} = champSlice.actions;

export default champSlice.reducer;

const url = '/champs';

export const loadchamps = () => apiCallBegan({
  url,
  onStart: champsRequested.type,
  onSuccess: champsReceived.type,
  onError: champsRequestFailed.type,
});

export const getChamps = createSelector(
  state => state.entities.champ.list,
  (list) => Object.entries(list).map((item) => item[1])
)