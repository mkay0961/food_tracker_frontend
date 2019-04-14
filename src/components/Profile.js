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
                <Image centered size='large' src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwizu9fk6c7hAhUDc98KHcHWCTAQjRx6BAgBEAU&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw0dRC49JIKV4stO0qZTkeqB&ust=1555305270481837"/>
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
