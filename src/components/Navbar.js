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
       <Menu pointing size='massive'>
         <Link to="/overview">
            <Menu.Item  name='Overview'/>
         </Link>
         <Link to="/food">
            <Menu.Item name='MyFood'/>
         </Link>
         <Link to="/recipes">
            <Menu.Item  name='Recipes'/>
         </Link>
         <Link to="/stats">
            <Menu.Item name='Stats'/>
         </Link>
         <Menu.Menu position='right'>
            <Menu.Item to="/logout" onClick={this.onLogout}  name='Logout'/>
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
