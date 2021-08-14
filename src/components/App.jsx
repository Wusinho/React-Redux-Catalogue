import React from 'react';
import { Provider } from 'react-redux';
import BookForm from './BookForm';
// import BookList from './BooksList';
import configureStoreApp from '../store/configureStore';
import * as actions from '../store/api';

const store = configureStoreApp();

store.dispatch(
  actions.apiCallBegan({
    url: '/books',
    onSuccess: 'books/booksReceived',
  }),
);

const App = () => (
  <Provider store={store}>
    <BookForm />
    {/* <BookList /> */}
  </Provider>
);

export default App;
