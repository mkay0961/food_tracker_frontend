import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Header, Image, Segment } from 'semantic-ui-react'

//make funtional?

class Profile extends Component {

  render() {
    return (
          <div>
            <Segment placeholder>
            <Header as='h2' icon textAlign='center'>
                <Image centered size='large' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
              <Header.Content><h1>{this.props.fname + " " + this.props.lname}</h1></Header.Content>
            </Header>
            <h3>{this.props.email}</h3>
          </Segment>
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
