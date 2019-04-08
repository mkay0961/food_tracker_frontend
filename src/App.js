import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import OverviewPage from './containers/OverviewPage'
import RecipesPage from './containers/RecipesPage'
import FoodPage from './containers/FoodPage'
import {Route, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from './redux/actions/user'
import {getAllRecipes} from './redux/actions/recipes'
import {getAllFoods} from './redux/actions/food'

class App extends Component {

  componentDidMount(){
    this.props.getUser()
    this.props.getAllRecipes()
    this.props.getAllFoods()
  }

  render() {
    return (
      <div className="App">
        <Route path= "/login" component={Login} />
        <Route path= "/signup" component={SignUp} />
        {this.props.user.id === undefined? null : <Switch>
          <Route path= "/overview" component={OverviewPage} />
          <Route path= "/recipes" component={RecipesPage} />
          <Route path= "/food" component={FoodPage}  />
        </Switch> }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: ()=>{dispatch(getUser(1))},
    getAllRecipes: ()=>{dispatch(getAllRecipes())},
    getAllFoods: ()=>{dispatch(getAllFoods())}
  }
}

const mapStateToProps = state =>({
  user: state.user
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
