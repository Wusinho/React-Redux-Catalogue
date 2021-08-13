import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

function configureStoreApp() {
  return configureStore({ reducer });
}

export default configureStoreApp;
