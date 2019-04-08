import React, { Component } from 'react'
import Category from './Category'
import { connect } from 'react-redux'


class CategoriesContainer extends Component {





//clean up


  generateCategories = () =>{
    let obj = {}
    console.log(this.props.search)
    this.props.foods.filter((food)=>food.name.toLowerCase().includes(this.props.search.toLowerCase())).forEach((food, i)=>{
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
      <div>
         {this.generateCategories()}
      </div>
    )
  }
}

const mapStateToProps = state =>({
  foods: state.user.foods,
  search: state.search
})

export default connect(mapStateToProps)(CategoriesContainer)
