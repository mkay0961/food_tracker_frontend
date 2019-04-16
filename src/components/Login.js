import React, { Component } from 'react'
import { loginUser } from '../redux/actions/user'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import Toaster from 'toasted-notes'
import 'toasted-notes/src/styles.css'


class Login extends Component {
  constructor(){
    super()
    this.state = {
      username: "",
      password: ""
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

  handleSubmitClick = (e) =>{
    e.preventDefault()

    const { username, password } = this.state
    const { loginUser } = this.props

    if(username !== "" && password !== ""){
      loginUser(username, password)
    }else{
      if(username === "") {
        Toaster.notify('**Please enter a username**', {
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
                 Log-in to your account
              </Header>
              <Form.Input fluid
                          onChange={(e)=>{this.onHandleChange(e)}}
                          name="username"
                          icon='user'
                          iconPosition='left'
                          placeholder='E-mail address' />

              <Form.Input fluid
                          onChange={(e)=>{this.onHandleChange(e)}}
                          icon='lock'
                          name="password"
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
