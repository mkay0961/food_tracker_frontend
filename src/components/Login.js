import React, { Component } from 'react'
import { loginUser } from '../redux/actions/user'
import { connect } from 'react-redux'

class Login extends Component {

  handleSubmitClick = (e) =>{
    e.preventDefault()
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    this.props.loginUser(username, password)
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
              <input onClick={this.handleSubmitClick} type="Submit" name="submit" placeholder="Submit"/>
            </div>
          </form>
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
