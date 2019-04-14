import React, { Component } from 'react'
import { loginUser } from '../redux/actions/user'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


class Login extends Component {

  handleSubmitClick = (e) =>{
    e.preventDefault()
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    if(username !== "" && password !== ""){
      debugger
      this.props.loginUser(username, password)
    }else{
      alert("please enter evertthing")
    }
  }

  render() {
    return (
      <div className='login-form'>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='orange' textAlign='center'>
            <Image src='../../public/gro.jpg' /> Log-in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid id="username" icon='user' iconPosition='left' placeholder='E-mail address' />
              <Form.Input
                fluid
                icon='lock'
                id="password"
                iconPosition='left'
                placeholder='Password'
                type='password'
              />

            <Button color='orange' fluid size='large' onClick={this.handleSubmitClick}>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to="/signup">
              <Button>Sign Up</Button>
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
    loginUser: (username, password)=>{dispatch(loginUser(username, password))}
    }
}

const mapStateToProps = state =>({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
