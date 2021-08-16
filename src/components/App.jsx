import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import configureStoreApp from '../store/configureStore';
import { loadBooks } from '../store/books';
import Home from './Home';
import BookList from './BooksList';
import Nav from './Nav';
import Item from './Item';

const store = configureStoreApp();

store.dispatch(loadBooks());

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={BookList} />
          <Route path="/shop/:id" exact component={Item} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
