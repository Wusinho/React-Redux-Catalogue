import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import api from './middleware/api';
import champApi from './middleware/champApi';

const store = configureStore({
  reducer,
  middleware: [
    api,
    champApi
  ]
}
  
)

export default store;
