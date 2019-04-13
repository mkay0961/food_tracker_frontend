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
        <Navbar/>
        <SearchPageBar/>
        <AddModal/>
        <EatModal/>
        <CategoriesContainer name={"nonExpired"} foods={this.props.nonExpired}/>
        <CategoriesContainer name={"expired"} foods={this.props.expired}/>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearSearchPage: ()=>{dispatch(clearSearchPage())}
  }
}

const mapStateToProps = state =>({
  nonExpired: state.user.foods.nonExpired,
  expired: state.user.foods.expired
})
export default connect(mapStateToProps, mapDispatchToProps)(FoodPage)
