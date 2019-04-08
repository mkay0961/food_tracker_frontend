import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

//make funtional?

class Navbar extends Component {
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
           <Menu.Item active={this.props.path=== "/logout"} name='Logout'/>
         </Menu.Menu>

       </Menu>
     </div>
   )
  }
}

export default Navbar;
