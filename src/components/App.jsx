import React from 'react';
import { Provider } from 'react-redux';
// import BookForm from './BookForm';
import configureStoreApp from '../store/configureStore';
import { loadBooks } from '../store/books';
import BookList from './BooksList';

const store = configureStoreApp();

store.dispatch(loadBooks());

const App = () => (
  <Provider store={store}>
    {/* <BookForm /> */}
    <BookList />
  </Provider>
);

export default App;
