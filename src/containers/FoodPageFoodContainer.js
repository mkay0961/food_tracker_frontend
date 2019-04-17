import React, { Component } from 'react'
import FoodForPage from '../components/FoodForPage'
import { connect } from 'react-redux'

class FoodPageFoodContainer extends Component {

  generateCategories = () =>{
    const { foods, search } = this.props

    let array =  foods.filter((food)=>food.name.toLowerCase().includes(search.toLowerCase()))

    array = array.map((item, i)=><FoodForPage key={i} data={item}/>)

    return array
  }

  render() {
    return (
      <div className="ui cards">
         {this.generateCategories()}
      </div>
    )
  }
}

const mapStateToProps = state =>({
  search: state.searchPage
})

export default connect(mapStateToProps, null)(FoodPageFoodContainer)
