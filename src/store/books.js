/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan, champCallBegan } from './api';
import { createSelector } from 'reselect';

export const champSlice = createSlice({
  name: 'champs',
  initialState: {
    loading: false,
    list: {},
    champSelection: null,
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
    champSelection: (champs, action) =>{
      champs.champSelection = action.payload;
    },
    champCategory: (champs, action) => {
      champs.category = action.payload;
    },
    selectedRequested: (champs) =>{
      champs.loading = true;
    },
    selectedReceived: (champs, action) =>{
      champs.selected = action.payload;
      champs.loading = false;
    },
    slectedRequestFailed: (champs,action)=>{
      champs.loading = false;
    }
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
} = champSlice.actions;

export default champSlice.reducer;

const url = '/champs';

export const loadchamps = () => apiCallBegan({
  url,
  onStart: champsRequested.type,
  onSuccess: champsReceived.type,
  onError: champsRequestFailed.type,
});

export const loadselected = (ID) => champCallBegan({
  url,
  ID: ID,
  onStart: selectedRequested.type,
  onSuccess: selectedReceived.type,
  onError: slectedRequestFailed.type,
});

export const getChamps = createSelector(
  state => state.entities.champs.list,
  (list) => Object.entries(list).map((item) => item[1])
)