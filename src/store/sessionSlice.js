/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan, sessionCallBegan, coachCallBegan } from './api';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    user: {},
    isLoggedIn: false,
    loading: false,
    token: '',
    list: {},
    coachList: '',
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
    sessionRequested: (api) => {
      api.loading = true;
    },
    sessionReceived: (api, action) => {
      api.list = action.payload;
      api.loading = false;
    },
    sessionRequestFailed: (api) => {
      api.loading = false;
    },
    coachRequested: (api) => {
      api.loading = true;
    },
    coachReceived: (api, action) => {
      api.list = action.payload;
      api.loading = false;
    },
    coachRequestFailed: (api) => {
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
  sessionReceived,
  sessionRequestFailed,
  sessionRequested,
  coachReceived,
  coachRequestFailed,
  coachRequested,
} = sessionSlice.actions;
export default sessionSlice.reducer;

const url = '/api';

export const signIn = (data) => apiCallBegan({
  url,
  data,
  onStart: apiRequested.type,
  onSuccess: apiReceived.type,
  onError: apiRequestFailed.type,
});

const url2 = '/session';

export const loadsession = () => sessionCallBegan({
  url2,
  onStart: sessionRequested.type,
  onSuccess: sessionReceived.type,
  onError: sessionRequestFailed.type,
});

export const loadcoach = () => coachCallBegan({
  url2,
  onStart: coachRequested.type,
  onSuccess: coachReceived.type,
  onError: coachRequestFailed.type,
});
