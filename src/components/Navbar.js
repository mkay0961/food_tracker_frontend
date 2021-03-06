import React, { Component } from 'react'
import { Menu, Header, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { clearUser } from '../redux/actions/user'

class Navbar extends Component {
  constructor(){
    super()
    this.state = {
      page: ""
    }
  }

  handlePageSwitch = (e) => {
    this.setState({page: e.target.innerText})
  }

  onLogout = () =>{
    this.setState({page:""})
    localStorage.clear()
    this.props.clearUser()
  }

  render() {

  const { page } = this.state

   return (
     <Segment >
       <Menu pointing size='massive' fluid inverted color='orange' >
         <Menu.Menu position='left'>
         <Link to="/overview">
            <Menu.Item active={page === "Overview"}  as="h1" name='Overview'/>
         </Link>
         <Link to="/food">
            <Menu.Item as="h1" active={page === "My Food"}  name='My Food'/>
         </Link>
         <Link to="/recipes">
            <Menu.Item as="h1" active={page === "Recipes"}  name='Recipes'/>
         </Link>
         <Link to="/stats">
            <Menu.Item as="h1" active={page === "Stats"}  name='Stats'/>
         </Link>
         </Menu.Menu>

         <Menu.Menu position='right'>
            <Header className="marg" as="h1">Food Tracker</Header>
         </Menu.Menu>

         <Menu.Menu position='right'>
            <Menu.Item as="h1" to="/logout" onClick={this.onLogout}  name='Logout'/>
         </Menu.Menu>
       </Menu>
     </Segment>
   )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearUser: ()=>{dispatch(clearUser())}
  }
}

export default connect(null, mapDispatchToProps)(Navbar)
