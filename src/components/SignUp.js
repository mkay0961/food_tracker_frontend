import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../redux/actions/user'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Message, Segment, Input } from 'semantic-ui-react'
import Toaster from 'toasted-notes'
import 'toasted-notes/src/styles.css'

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
    const { firstname, lastname, email, username,
            password, passwordConfirm, image } = this.state

    let newUser = {}

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
        Toaster.notify('**Please enter a first name**', {
          position: "top",
          duration: 2000
        })
      }
      if(lastname === "") {
        Toaster.notify('**Please enter a last name**', {
          position: "top",
          duration: 2000
        })
      }
      if(email === "") {
        Toaster.notify('**Please enter an email**', {
          position: "top",
          duration: 2000
        })
      }
      if(username === "") {
        Toaster.notify('**Please enter an username**', {
          position: "top",
          duration: 2000
        })
      }
      if(password === "") {
        Toaster.notify('**Please enter a password**', {
          position: "top",
          duration: 2000
        })
      }
      if(passwordConfirm === "") {
        Toaster.notify('**Please enter a password confirm**', {
          position: "top",
          duration: 2000
        })
      }
      if(password !== passwordConfirm) {
        Toaster.notify('**Your password confirm does not equal your password**', {
          position: "top",
          duration: 2000
        })
      }
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
        <Grid.Column className="signup">
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
