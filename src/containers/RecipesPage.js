import React, {Component} from 'react';
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import AdvancedModal from '../components/AdvancedModal'
import RecipeContainer from './RecipeContainer'
import RecipeModal from '../components/RecipeModal'
import {clearSearch} from '../redux/actions/searchBar'
import { connect } from 'react-redux'




class RecipesPage extends Component {

  //move to redux
  constructor(){
    super()
    this.state = {
      showModal: false,
      current: null
    }
  }

  componentDidMount(){
    this.props.clearSearch()
  }

  handleShowModal = (data) => {
    console.log(data);
    this.setState({showModal: true, current: data})
  }
  handleNoShowModal = () => {
    this.setState({showModal: false, current: null})
  }

  render() {
    return (
       <div>
          <Navbar path={this.props.location.pathname} />
          <SearchBar />
          <AdvancedModal />
          <RecipeContainer handleClick={this.handleShowModal} />
          <RecipeModal data={this.state.current} active={this.state.showModal} noShow={this.handleNoShowModal} />
       </div>
        )
      }
}
const mapDispatchToProps = dispatch => {
  return {
    clearSearch: ()=>{dispatch(clearSearch())}
  }
}
export default connect(null, mapDispatchToProps)(RecipesPage)

// <RecipeContainer handleClick={this.handleShowModal} />
// <RecipeModal active={this.state.showModal} noShow={this.handleNoShowModal}/>
