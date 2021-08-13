import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import api from './middleware/api';

function configureStoreApp() {
  return configureStore({
    reducer,
    middleware: [api],
  });
}

export default configureStoreApp;
