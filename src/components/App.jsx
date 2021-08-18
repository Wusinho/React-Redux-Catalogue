import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import configureStoreApp from '../store/configureStore';
import { loadchamps } from '../store/books';
import Home from './Home';
import ChampList from './ChampList';
import Nav from './Nav';
import Item from './SelectedChamp';
import '../style/App.scss';

const store = configureStoreApp();

store.dispatch(loadchamps());

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/champs" exact component={ChampList} />
          <Route path="/champs/:id" exact component={Item} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
