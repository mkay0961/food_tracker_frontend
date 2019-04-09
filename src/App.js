import React, { Component } from 'react'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import OverviewPage from './containers/OverviewPage'
import RecipesPage from './containers/RecipesPage'
import FoodPage from './containers/FoodPage'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser, clearUser } from './redux/actions/user'
import { getAllRecipes } from './redux/actions/recipes'
import { getAllFoods } from './redux/actions/food'
import { isEmpty } from 'lodash'

class App extends Component {

  componentDidMount(){
    // this.props.getUser()
    let token = localStorage.getItem("token")
    this.props.getAllRecipes()
    this.props.getAllFoods()
    if(token){
      console.log("SOMEONE IS LOGGINED");
      this.props.getUser()
    }
  }

  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path="/login" render={() => {
            return isEmpty(this.props.user)? <Login /> :
            <Redirect to="/overview" />
        }}
        />
        <Route exact path="/overview" render={() => {
            return isEmpty(this.props.user) ? <Redirect to="/login" /> :
            <OverviewPage />
        }}
        />

        <Route exact path="/recipes" render={() => {
            return isEmpty(this.props.user) ? <Redirect to="/login" /> :
            <RecipesPage />
        }}
        />
        <Route exact path="/food" render={() => {
            return isEmpty(this.props.user) ? <Redirect to="/login" /> :
            <FoodPage />
        }}
        />

       <Route exact path= "/signup" component={SignUp} />

       <Route exact path="/" render={() =>  <Redirect to="/overview" />} />
      </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: ()=>{dispatch(getUser())},
    getAllRecipes: ()=>{dispatch(getAllRecipes())},
    getAllFoods: ()=>{dispatch(getAllFoods())},
    clearUser: ()=>{dispatch(clearUser())}
  }
}

const mapStateToProps = state =>({
  user: state.user
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
