import React, { Component } from 'react'

//make funtional?

class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>Food Tracker</h1>
        <h1>Sign Up</h1>
        <div>
          <form>
            <div>
              <input type="text" name="firstname" placeholder="First Name"/>
            </div>
            <div>
              <input type="text" name="lastname" placeholder="Last Name"/>
            </div>
            <div>
              <input type="text" name="email" placeholder="Email"/>
            </div>
            <div>
              <input type="text" name="username" placeholder="Username"/>
            </div>
            <div>
              <input type="password" name="password" placeholder="Password"/>
            </div>
            <div>
              <input type="text" name="image" placeholder="Image"/>
            </div>
            <div>
              <input type="Submit" name="submit" placeholder="Submit"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SignUp
