/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  apiCallBegan,
  sessionCallBegan,
  coachCallBegan,
  appointmentCallBegan,
  setappointmentCallBegan,
} from './api';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    user: '',
    isLoggedIn: false,
    loading: false,
    token: '',
    list: '',
    coachList: '',
    usersAppointments: '',
    error: '',
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
    regRequested: (api) => {
      api.loading = true;
    },
    regReceived: (api, action) => {
      api.user = action.payload;
      api.token = action.payload.token;
      api.isLoggedIn = action.payload.status;
      api.loading = false;
    },
    regRequestFailed: (api, action) => {
      api.loading = false;
      api.error = action.payload;
    },
    sessionRequested: (api) => {
      api.loading = true;
    },
    sessionReceived: (api, action) => {
      api.user = action.payload;
      api.token = action.payload.token;
      api.isLoggedIn = action.payload.status;
      api.loading = false;
    },
    sessionRequestFailed: (api, action) => {
      api.loading = false;
      api.error = action.payload;
    },
    coachRequested: (api) => {
      api.loading = true;
    },
    coachReceived: (api, action) => {
      api.coachList = action.payload;
      api.loading = false;
    },
    coachRequestFailed: (api, action) => {
      api.loading = false;
      api.error = action.payload;
    },
    appointmentRequested: (api) => {
      api.loading = true;
    },
    appointmentReceived: (api, action) => {
      api.usersAppointments = action.payload;
      api.loading = false;
    },
    appointmenthRequestFailed: (api, action) => {
      api.loading = false;
      api.error = action.payload;
    },
    setappointmentRequested: (api) => {
      api.loading = true;
    },
    setappointmentReceived: (api, action) => {
      api.list = action.payload;
      api.loading = false;
    },
    setappointmenthRequestFailed: (api, action) => {
      api.loading = false;
      api.error = action.payload;
    },
  },
});

export const selectCurrentUser = (state) => state.entities.session.user;
export const selectIsLoggedIn = (state) => state.entities.session.isLoggedIn;
export const {
  signUp,
  logOut,
  editUser,
  regRequested,
  regReceived,
  regRequestFailed,
  sessionReceived,
  sessionRequestFailed,
  sessionRequested,
  coachReceived,
  coachRequestFailed,
  coachRequested,
  appointmentReceived,
  appointmentRequestFailed,
  appointmentRequested,
  setappointmentReceived,
  setappointmentRequestFailed,
  setappointmentRequested,
} = sessionSlice.actions;
export default sessionSlice.reducer;

const url = '/api';

export const register = (data) => apiCallBegan({
  url,
  data,
  onStart: regRequested.type,
  onSuccess: regReceived.type,
  onError: regRequestFailed.type,
});

const url2 = '/session';

export const signIn = (data) => sessionCallBegan({
  url2,
  data,
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

export const usersAppointments = () => appointmentCallBegan({
  url2,
  onStart: appointmentRequested.type,
  onSuccess: appointmentReceived.type,
  onError: appointmentRequestFailed.type,
});

export const setAppointments = () => setappointmentCallBegan({
  url2,
  onStart: setappointmentRequested.type,
  onSuccess: setappointmentReceived.type,
  onError: setappointmentRequestFailed.type,
});
