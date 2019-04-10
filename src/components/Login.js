import React, { Component } from 'react'
import { loginUser } from '../redux/actions/user'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Login extends Component {

  handleSubmitClick = (e) =>{
    e.preventDefault()
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    if(username !== "" && password !== ""){
      this.props.loginUser(username, password)
    }else{
      alert("please enter evertthing")
    }
  }

  render() {
    return (
      <div>
        <h1>Food Tracker</h1>
        <h1>Login</h1>
        <div>
          <form >
            <div>
              <input id="username" type="text" name="username" placeholder="Username"/>
            </div>
            <div>
              <input id="password" type="password" name="password" placeholder="Password"/>
            </div>
            <div>
              <button onClick={this.handleSubmitClick}>Login</button>
            </div>
          </form>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    loginUser: (username, password)=>{dispatch(loginUser(username, password))}
    }
}

const mapStateToProps = state =>({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
