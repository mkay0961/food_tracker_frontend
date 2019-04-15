import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Header, Image, Segment } from 'semantic-ui-react'

//make funtional?

class Profile extends Component {

  render() {
    return (
          <div>

              <Image centered size='medium' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
            <Header as='h1' icon textAlign='center'>
              <Header.Content>{this.props.fname + " " + this.props.lname}</Header.Content>
            </Header>
            <h2>{this.props.email}</h2>
          
          </div>
        )
      }
}

const mapStateToProps = state =>({
  fname: state.user.first_name,
  lname: state.user.last_name,
  email: state.user.email,
  proimage: state.user.profile_image
})

export default connect(mapStateToProps, null)(Profile)
