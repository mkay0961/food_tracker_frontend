import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import OverviewPage from './containers/OverviewPage'
import RecipesPage from './containers/RecipesPage'
import FoodPage from './containers/FoodPage'
import {Route, Redirect, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path= "/login" component={Login} />
          <Route path= "/signup" component={SignUp} />
          <Route path= "/overview" component={OverviewPage} />
          <Route path= "/recipes" component={RecipesPage} />
          <Route path= "/food" component={FoodPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
