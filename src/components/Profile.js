import React from 'react'
import { connect } from 'react-redux'
import { Header, Image, Segment } from 'semantic-ui-react'

const Profile = (props) => (
        <div color="orange" className="profile opac outlineOrange2Pro">
          <Segment compact className="opac1">
            <Image centered size='medium' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
          </Segment>
          <Header as='h1' icon textAlign='center'>
            <Header.Content>{props.fname + " " + props.lname}</Header.Content>
          </Header>
          <h2>{props.email}</h2>
        </div>
)


const mapStateToProps = state =>({
  fname: state.user.first_name,
  lname: state.user.last_name,
  email: state.user.email,
  proimage: state.user.profile_image
})

export default connect(mapStateToProps, null)(Profile)
