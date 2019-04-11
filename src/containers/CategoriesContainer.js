import React, { Component } from 'react'
import Category from './Category'
import { connect } from 'react-redux'


class CategoriesContainer extends Component {

  // delUniqs = (foods) => {
  //   let allFoods = []
  //   let foodsIds = foods.map((aFood)=>aFood.food_id)
  //
  //
  //
  //
  //   // // let foodsIds = foods.map((aFood)=>aFood.food_id)
  //   // for (let i = 0; i < foods.length; i++) {
  //   //   if(obj[foods[i].food_id] === undefined){
  //   //     let amount = foods[i].amount.split(" ")[0]
  //   //     obj[foods[i].food_id] = parseInt(amount)
  //   //   }else{
  //   //     let amount1 = foods[i].amount.split(" ")[0]
  //   //     let amount2 = obj[foods[i].food_id]
  //   //     console.log(amount2);
  //   //     obj[foods[i].food_id] = parseInt(amount1) + parseInt(amount2)
  //   //   }
  //   // }
  //   // console.log(obj);
  //   return foods
  // }

  generateCategories = () =>{
    const { foods, search } = this.props
    let obj = {}
    console.log(foods)


    foods.filter((food)=>food.name.toLowerCase().includes(search.toLowerCase())).forEach((food, i)=>{
      let category = food.category

      if (obj[category] === undefined){
        obj[category] = []
      }

      if (obj[category] !== undefined && !obj[category].includes(food)) {
        obj[category].push(food)
      }
    })
    let array = Object.keys(obj).map((key, i)=>{
      return <Category key={i} name={key} food={obj[key]} />
    })

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
  foods: state.user.foods,
  search: state.searchPage
})

export default connect(mapStateToProps, null)(CategoriesContainer)
