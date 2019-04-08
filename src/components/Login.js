import React, { Component } from 'react'

class Login extends Component {
  constructor(){
    super()
    this.state = {
      username: "",
      password: ""
    }
  }

  onChangeOfForm = (e) =>{
    console.log("Change on form", e.target.name,e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    return (
      <div>
        <h1>Food Tracker</h1>
        <h1>Login</h1>
        <div>
          <form onChange={(e)=>{this.onChangeOfForm(e)}}>
            <div>
              <input type="text" name="username" placeholder="Username"/>
            </div>
            <div>
              <input type="password" name="password" placeholder="Password"/>
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

export default Login
