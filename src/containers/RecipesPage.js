import React, {Component} from 'react';
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import AdvancedModal from '../components/AdvancedModal'
import RecipeContainer from './RecipeContainer'



class RecipesPage extends Component {
  constructor(){
    super()
    this.state = {
      showModal: false
    }
  }

  handleShowModal = () => {
    this.setState({showModal: !this.state.showModal})
  }



  render() {
    return (
       <div>
          <Navbar path={this.props.location.pathname} />
          <SearchBar />
          <AdvancedModal />
          <RecipeContainer />
       </div>
        )
      }
}


export default (RecipesPage);
