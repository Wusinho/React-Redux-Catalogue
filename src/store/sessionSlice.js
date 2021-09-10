/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan, logCallBegan } from './api';
// import { createSelector } from 'reselect';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    user: {},
    isLoggedIn: false,
    loading: false,
    token: '',
    list: {},
  },
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    editUser: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = {};
      state.isLoggedIn = false;
    },
    apiRequested: (api) => {
      api.loading = true;
    },
    apiReceived: (api, action) => {
      api.user = action.payload;
      api.token = action.payload.token;
      api.isLoggedIn = action.payload.status;
      api.loading = false;
    },
    apiRequestFailed: (api) => {
      api.loading = false;
    },
    logRequested: (api) => {
      api.loading = true;
    },
    logReceived: (api, action) => {
      api.list = action.payload;
      api.loading = false;
    },
    logRequestFailed: (api) => {
      api.loading = false;
    },
  },
});

export const selectCurrentUser = (state) => state.entities.session.user;
export const selectIsLoggedIn = (state) => state.entities.session.isLoggedIn;
export const {
  signUp,
  logOut,
  editUser,
  apiRequested,
  apiReceived,
  apiRequestFailed,
  logReceived,
  logRequestFailed,
  logRequested,
} = sessionSlice.actions;
export default sessionSlice.reducer;

const url = '/api';

export const loadapi = (data) => apiCallBegan({
  url,
  data,
  onStart: apiRequested.type,
  onSuccess: apiReceived.type,
  onError: apiRequestFailed.type,
});

const url2 = '/log';

export const loadlogin = () => logCallBegan({
  url2,
  onStart: logRequested.type,
  onSuccess: logReceived.type,
  onError: logRequestFailed.type,
});
