import React, {Component} from 'react';
import { connect } from 'react-redux'

//make funtional?

class Profile extends Component {

  render() {
    return (
          <div className="ui card">
              <h2>{this.props.proimage}</h2>
              <h1>{this.props.fname + " " + this.props.lname}</h1>
              <h3>{this.props.email}</h3>
          </div>
        );
      }
}

const mapStateToProps = state =>({
  fname: state.user.first_name,
  lname: state.user.last_name,
  email: state.user.email,
  proimage: state.user.profile_image
})

export default connect(mapStateToProps)(Profile);
