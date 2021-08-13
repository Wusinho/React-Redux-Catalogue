import React from 'react';
import { Provider } from 'react-redux';
import BookForm from './BookForm';
import BookList from './BooksList';
import configureStoreApp from '../store/configureStore';

const store = configureStoreApp();

const App = () => (
  <Provider store={store}>
    <BookForm />
    <BookList />
  </Provider>
);

export default App;
