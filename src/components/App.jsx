import React from 'react';
import { Provider } from 'react-redux';
import BookForm from './BookForm';
import BookList from './BooksList';
import configureStoreApp from '../store/configureStore';

const store = configureStoreApp();

store.dispatch({
  type: 'apiCallBegan',
  payload: {
    url: '/api',
    onSuccess: 'apiReceived',
    onError: 'apiRequestFailed',
  },
});

const App = () => (
  <Provider store={store}>
    <BookForm />
    <BookList />
  </Provider>
);

export default App;
