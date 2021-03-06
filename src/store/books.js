/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { apiCallBegan, champCallBegan } from './api';

export const champSlice = createSlice({
  name: 'champs',
  initialState: {
    loading: false,
    list: {},
    champTags: '',
    category: 'All',
    selected: {},
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
    champCategory: (champs, action) => {
      champs.category = action.payload;
    },
    selectedRequested: (champs) => {
      champs.loading = true;
    },
    selectedReceived: (champs, action) => {
      champs.selected = action.payload;
      champs.loading = false;
    },
    slectedRequestFailed: (champs) => {
      champs.loading = false;
    },
    selectedChampTags: (champs, action) => {
      champs.champTags = action.payload;
    },
  },
});

export const {
  champsReceived,
  champsRequested,
  champsRequestFailed,
  champSelection,
  champCategory,
  selectedRequested,
  selectedReceived,
  slectedRequestFailed,
  selectedChampTags,
} = champSlice.actions;

export default champSlice.reducer;

export const selectCategory = (state) => state.entities.champs.category;
export const selectChamp = (state) => state.entities.champs.selected;
export const selectTag = (state) => state.entities.champs.champTags;

const url = '/champs';

export const loadchamps = () => apiCallBegan({
  url,
  onStart: champsRequested.type,
  onSuccess: champsReceived.type,
  onError: champsRequestFailed.type,
});

export const loadselected = (ID) => champCallBegan({
  url,
  ID,
  onStart: selectedRequested.type,
  onSuccess: selectedReceived.type,
  onError: slectedRequestFailed.type,
});

export const getChamps = createSelector(
  (state) => state.entities.champs.list,
  (list) => Object.entries(list).map((item) => item[1]),
);
