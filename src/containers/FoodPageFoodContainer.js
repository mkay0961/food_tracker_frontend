import React, { Component } from 'react'
import FoodForPage from '../components/FoodForPage'
import { connect } from 'react-redux'

//functional?

class FoodPageFoodContainer extends Component {

  generateCategories = () =>{
    const { foods, search } = this.props


    // let obj = {}
    //
    let array =  foods.filter((food)=>food.name.toLowerCase().includes(search.toLowerCase()))

    array = array.map((item, i)=><FoodForPage key={i} data={item}/>)


    // .forEach((food, i)=>{
    //   let category = food.category
    //
    //   if (obj[category] === undefined){
    //     obj[category] = []
    //   }
    //
    //   if (obj[category] !== undefined && !obj[category].includes(food)) {
    //     obj[category].push(food)
    //   }
    // })
    //
    //
    // let array = Object.keys(obj).map((key, i)=>{
    //   return <Category key={i} name={key} food={obj[key]} />
    // })
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
