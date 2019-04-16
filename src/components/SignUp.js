import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../redux/actions/user'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Message, Segment, Input } from 'semantic-ui-react'

//make funtional?

class SignUp extends Component {
  constructor(){
    super()
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      passwordConfirm: "",
      image: ""
    }
  }

  onClickSubmit = (e) =>{
    e.preventDefault()
    const { firstname, lastname, email, username, password, passwordConfirm, image } = this.state

    let newUser = {}

    // let firstname = document.getElementById("firstname").value
    // let lastname = document.getElementById("lastname").value
    // let email = document.getElementById("email").value
    // let username = document.getElementById("username").value
    // let password = document.getElementById("password").value
    // let passwordConfirm = document.getElementById("passwordConfirm").value
    // let image = document.getElementById("image").value
    let errorMess = ""

    if(firstname !== "" && lastname !== "" && email !== "" && username !== "" && password !== "" && password === passwordConfirm){
      newUser["firstname"] = firstname
      newUser["lastname"] = lastname
      newUser["email"] = email
      newUser["username"] = username
      newUser["password"] = password
      newUser["image"] = image
      this.props.createUser(newUser)
      this.props.history.push("/login")
    }else{
      if(firstname === "") {
        errorMess += "**Please enter a first name**\n"
      }
      if(lastname === "") {
        errorMess += "**Please enter a last name**\n"
      }
      if(email === "") {
        errorMess += "**Please enter an email**\n"
      }
      if(username === "") {
        errorMess += "**Please enter an username**\n"
      }
      if(password === "") {
        errorMess += "**Please enter a password**\n"
      }
      if(passwordConfirm === "") {
        errorMess += "**Please enter a password confirm**\n"
      }
      if(password !== passwordConfirm) {
        errorMess += "**Your password confirm does not equal your password**\n"
      }
      alert(errorMess)
      errorMess = ""
    }
  }

  onHandleChange = (event) =>{

    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })

  }

  render() {
    return (
      <div className='backImage'>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Segment stacked>
            <Header as='h1' color='orange' textAlign='center'>
              Food Tracker
            </Header>
          </Segment>

          <Form size='large'>
            <Segment stacked>
              <Header as='h2' color='orange' textAlign='center'>
                 Sign Up For Food Tracker!!
              </Header>
              <Form.Field>
                    <Input onChange={this.onHandleChange} name="username" label="Username" placeholder='Username' />
              </Form.Field>
              <Form.Field>
                    <Input onChange={this.onHandleChange} name="password" type="password" label="Password" placeholder='Password' />
              </Form.Field>
              <Form.Field>
                    <Input onChange={this.onHandleChange} name="passwordConfirm" type="password" label="Confirm Password" placeholder='Confirm Password' />
              </Form.Field>
              <Form.Field>
                    <Input onChange={this.onHandleChange} name="email" label="Email" placeholder='Email' />
              </Form.Field>
              <Form.Field>
                    <Input onChange={this.onHandleChange} name="firstname" label="First Name" placeholder='First Name' />
              </Form.Field>
              <Form.Field>
                    <Input onChange={this.onHandleChange} name="lastname" label="Last Name" placeholder='Last Name' />
              </Form.Field>
              <Form.Field>
                    <Input onChange={this.onHandleChange} name="image" label="Profile Image" placeholder='Profile Image' />
              </Form.Field>
              <Button color='orange' fluid size='large' onClick={(e)=>{this.onClickSubmit(e)}} >Sign Up</Button>
            </Segment>
          </Form>
          <Message>
            <Link to="/login">
              <Button color='orange' fluid size='large'>Cancel</Button>
            </Link>
          </Message>
        </Grid.Column>
      </Grid>
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
