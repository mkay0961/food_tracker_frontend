import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../redux/actions/user'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment, Input } from 'semantic-ui-react'

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
    let passwordConfirm = document.getElementById("passwordConfirm").value
    let image = document.getElementById("image").value

    if(firstname !== "" && lastname !== "" && email !== "" && username !== "" && password !== "" && password === passwordConfirm){
      newUser["firstname"] = firstname
      newUser["lastname"] = lastname
      newUser["email"] = email
      newUser["username"] = username
      newUser["password"] = password
      newUser["image"] = image
      this.props.createUser(newUser)
      this.props.history.push("/login")
    }else if (password !== passwordConfirm) {
      alert("Your password does not match the confirm password")
    }else{
      alert("something is missing")
    }
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
                    <Input id="username" label="Username" placeholder='Username' />
              </Form.Field>
              <Form.Field>
                    <Input id="password" type="password" label="Password" placeholder='Password' />
              </Form.Field>
              <Form.Field>
                    <Input id="passwordConfirm" type="password" label="Confirm Password" placeholder='Confirm Password' />
              </Form.Field>
              <Form.Field>
                    <Input id="email" label="Email" placeholder='Email' />
              </Form.Field>
              <Form.Field>
                    <Input id="firstname" label="First Name" placeholder='First Name' />
              </Form.Field>
              <Form.Field>
                    <Input id="lastname" label="Last Name" placeholder='Last Name' />
              </Form.Field>
              <Form.Field>
                    <Input id="image" label="Profile Image" placeholder='Profile Image' />
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
