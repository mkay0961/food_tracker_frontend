import React, { Component } from 'react'
import CategoriesContainer from './CategoriesContainer'
import Navbar from '../components/Navbar'
import SearchPageBar from '../components/SearchPageBar'
import AddModal from '../components/AddModal'
import EatModal from '../components/EatModal'
import { clearSearchPage } from '../redux/actions/searchPageBar'
import { connect } from 'react-redux'


class FoodPage extends Component {

  componentDidMount(){
    this.props.clearSearchPage()
  }

  render() {
    return (
      <div>
        <Navbar />
        <SearchPageBar />
        <AddModal/>
        <EatModal />
        <CategoriesContainer />
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    clearSearchPage: ()=>{dispatch(clearSearchPage())}
  }
}
export default connect(null, mapDispatchToProps)(FoodPage)
