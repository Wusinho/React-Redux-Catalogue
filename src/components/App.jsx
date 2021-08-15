import React from 'react';
import { Provider } from 'react-redux';
import configureStoreApp from '../store/configureStore';
import { loadBooks } from '../store/books';
import BookList from './BooksList';
import Navbar from './Navbar';

const store = configureStoreApp();

store.dispatch(loadBooks());

const App = () => (
  <Provider store={store}>
    <Navbar />
    <div className="card-group">
      <BookList />
    </div>
  </Provider>
);

export default App;
