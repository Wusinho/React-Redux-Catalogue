import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from '../store/configureStore';
import { loadchamps } from '../store/books';
import Home from './Home';
import ChampList from './ChampList';
import Nav from './Nav';
import SelectedChamp from './SelectedChamp';
import Registration from './Registration';
import SignIn from './SignIn';
import '../style/App.scss';

store.dispatch(loadchamps());

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/champs" exact component={ChampList} />
          <Route path="/champs/:id" exact component={SelectedChamp} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/sign_in" component={SignIn} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
