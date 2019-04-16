import React, { Component } from 'react'
import CategoriesContainer from './CategoriesContainer'
import Navbar from '../components/Navbar'
import SearchPageBar from '../components/SearchPageBar'
import AddModal from '../components/AddModal'
import EatModal from '../components/EatModal'
import { clearSearchPage } from '../redux/actions/searchPageBar'
import { connect } from 'react-redux'
import { Divider } from 'semantic-ui-react'

class FoodPage extends Component {

  componentDidMount(){
    this.props.clearSearchPage()
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className="buttonsGroup">
          <SearchPageBar/>
          <AddModal/>
          <EatModal/>
        </div>
        <h1>Not Expired</h1>
        <div className="catagory scrollable">
          <CategoriesContainer name={"Not Expired"} foods={this.props.nonExpired}/>
        </div>
        <Divider section />
        <h1>Expired</h1>
        <div className="catagory scrollable">
          <CategoriesContainer name={"Expired"} foods={this.props.expired}/>
        </div>
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
