import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../redux/actions/user'
import { Link } from 'react-router-dom'

//make funtional?

class SignUp extends Component {

  onClickSubmit = (e) =>{
    e.preventDefault()
    let newUser = {}

    let firstname = document.getElementById("firstname").value
    let lastname = document.getElementById("lastname").value
    let email = document.getElementById("email").value
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let image = document.getElementById("image").value

    if(firstname !== "" && lastname !== "" && email !== "" && username !== "" && password !== "" && image !== ""){
      newUser["firstname"] = firstname
      newUser["lastname"] = lastname
      newUser["email"] = email
      newUser["username"] = username
      newUser["password"] = password
      newUser["image"] = image
      this.props.createUser(newUser)
      this.props.history.push("/login")
    }else{
      alert("something is missing")
    }
  }

  render() {
    return (
      <div>
        <h1>Food Tracker</h1>
        <h1>Sign Up</h1>
        <div>
          <form>
            <div>
              <input id="firstname" type="text" name="firstname" placeholder="First Name"/>
            </div>
            <div>
              <input id="lastname" type="text" name="lastname" placeholder="Last Name"/>
            </div>
            <div>
              <input id="email" type="text" name="email" placeholder="Email"/>
            </div>
            <div>
              <input id="username" type="text" name="username" placeholder="Username"/>
            </div>
            <div>
              <input id="password" type="password" name="password" placeholder="Password"/>
            </div>
            <div>
              <input id="image" type="text" name="image" placeholder="Image"/>
            </div>
            <div>
              <input onClick={(e)=>{this.onClickSubmit(e)}} type="Submit" name="submit" placeholder="Submit"/>
            </div>
          </form>
          <Link to="/login">
            <button>Cancel</button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: (userData)=>{dispatch(createUser(userData))}
  }
}

export default connect(null, mapDispatchToProps)(SignUp)
