import React from 'react';
import { Provider } from 'react-redux';
import configureStoreApp from '../store/configureStore';
import { loadBooks } from '../store/books';
import BookList from './BooksList';

const store = configureStoreApp();

store.dispatch(loadBooks());

const App = () => (
  <Provider store={store}>
    <div className="card-group">
      <BookList />
    </div>
  </Provider>
);

export default App;
