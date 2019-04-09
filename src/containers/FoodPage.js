import React, { Component } from 'react'
import CategoriesContainer from './CategoriesContainer'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import AddModal from '../components/AddModal'
import EatModal from '../components/EatModal'
import { clearSearch } from '../redux/actions/searchBar'
import { connect } from 'react-redux'


class FoodPage extends Component {

  componentDidMount(){
    this.props.clearSearch()
  }

  render() {
    return (
      <div>
        <Navbar />
        <SearchBar />
        <AddModal/>
        <EatModal />
        <CategoriesContainer />
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    clearSearch: ()=>{dispatch(clearSearch())}
  }
}
export default connect(null, mapDispatchToProps)(FoodPage)
