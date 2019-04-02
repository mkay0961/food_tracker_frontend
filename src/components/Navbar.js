import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
  render() {
   return (
     <div>
       <Menu pointing secondary>

         <Link to="/overview">
            <Menu.Item name='Overview'/>
         </Link>

         <Link to="/food">
            <Menu.Item name='My Food'/>
         </Link>

         <Link to="/recipes">
            <Menu.Item name='Recipes'/>
         </Link>

         <Menu.Menu position='right'>
           <Menu.Item name='logout'/>
         </Menu.Menu>

       </Menu>
     </div>
   )
  }
}

export default Navbar;
