import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import api from './middleware/api';
import champApi from './middleware/champApi';
import login from './middleware/login';
import registration from './middleware/registration';
import coaches from './middleware/coaches';
import userAppointments from './middleware/userAppointments';
import setAppointments from './middleware/setAppointments';

const store = configureStore({
  reducer,
  middleware: [
    api,
    champApi,
    login,
    registration,
    coaches,
    userAppointments,
    setAppointments,
  ],
});

export default store;
