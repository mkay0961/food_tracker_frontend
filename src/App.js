// import React, { Component, createRef } from 'react'
import React, { Component } from 'react'
import './App.css'
import { Loader, Dimmer } from 'semantic-ui-react'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import OverviewPage from './containers/OverviewPage'
import RecipesPage from './containers/RecipesPage'
import FoodPage from './containers/FoodPage'
import StatsPage from './containers/StatsPage'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser, clearUser } from './redux/actions/user'
import { getAllRecipes } from './redux/actions/recipes'
import { getAllFoods } from './redux/actions/food'
import { isEmpty } from 'lodash'

class App extends Component {

  // contextRef = createRef()

  componentDidMount(){
    const { getAllRecipes, getAllFoods, getUser} = this.props

    let token = localStorage.getItem("token")
    getAllRecipes()
    getAllFoods()
    if(token){
      console.log("SOMEONE IS LOGGINED")
      getUser()
    }
  }

  render() {
    const { user, location } = this.props

    return (
      <div className="App">
        {(localStorage.length>0 && isEmpty(user) && location.pathname === "/login") ?<div className="loader"><Dimmer inverted active>
        <Loader size='massive'>Loading</Loader>
      </Dimmer></div>:
        <div>
        <Switch>
          <Route exact path="/login" render={() => {
              return isEmpty(user)? <Login /> :
              <Redirect to="/overview" />
          }}
          />
          <Route exact path="/overview" render={() => {
              return isEmpty(user) ? <Redirect to="/login" /> :
              <OverviewPage />
          }}
          />

          <Route exact path="/recipes" render={() => {
              return isEmpty(user) ? <Redirect to="/login" /> :
              <RecipesPage />
          }}
          />
          <Route exact path="/food" render={() => {
              return isEmpty(user) ? <Redirect to="/login" /> :
              <FoodPage />
          }}
          />
        <Route exact path="/stats" render={() => {
              return isEmpty(user) ? <Redirect to="/login" /> :
              <StatsPage />
          }}
          />
         <Route exact path= "/signup" component={SignUp} />
         <Route exact path="*" render={() =>  <Redirect to="/overview" />} />
        </Switch>
        </div>}
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

// <OverviewPage contextRef={this.contextRef}/>
