import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { clearUser } from '../redux/actions/user'
//make funtional?

class Navbar extends Component {

  onLogout = () =>{
    console.log("LOG OUT")
    localStorage.clear()
    this.props.clearUser()
  }

  render() {
   return (
     <div>
       <Menu pointing secondary>
         <Link to="/overview">
            <Menu.Item active={this.props.path=== "/overview"} name='Overview'/>
         </Link>
         <Link to="/food">
            <Menu.Item  active={this.props.path=== "/food"} name='My Food'/>
         </Link>
         <Link to="/recipes">
            <Menu.Item  active={this.props.path=== "/recipes"} name='Recipes'/>
         </Link>
         <Menu.Menu position='right'>
            <Menu.Item to="/logout" onClick={this.onLogout} active={this.props.path=== "/logout"} name='Logout'/>
         </Menu.Menu>
       </Menu>
     </div>
   )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearUser: ()=>{dispatch(clearUser())}
  }
}

export default connect(null, mapDispatchToProps)(Navbar)
