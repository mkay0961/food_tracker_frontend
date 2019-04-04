import React, {Component} from 'react';
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import AdvancedModal from '../components/AdvancedModal'
import RecipeContainer from './RecipeContainer'
import RecipeModal from '../components/RecipeModal'



class RecipesPage extends Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     showModal: false,
  //     current: null
  //   }
  // }
  //
  // handleShowModal = (data) => {
  //   console.log(data);
  //   this.setState({showModal: true, current: data})
  // }
  // handleNoShowModal = () => {
  //   this.setState({showModal: false, current: null})
  // }

  render() {
    return (
       <div>
          <Navbar path={this.props.location.pathname} />
          <SearchBar />
          <AdvancedModal />
          <RecipeContainer  />
       </div>
        )
      }
}


export default (RecipesPage);

// <RecipeContainer handleClick={this.handleShowModal} />
// <RecipeModal active={this.state.showModal} noShow={this.handleNoShowModal}/>
