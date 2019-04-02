import React, {Component} from 'react';
import Category from './Category'
import { connect } from 'react-redux'


class CategoriesContainer extends Component {

  generateCategories = () =>{
    let obj = {}

    this.props.foods.forEach((food, i)=>{
      let category = food.category

      if (obj[category] === undefined){
        obj[category] = []
      }

      if (obj[category] !== undefined && !obj[category].includes(food)) {
        obj[category].push(food)
      }
      console.log(obj)
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
  foods: state.user.foods
})

export default connect(mapStateToProps)(CategoriesContainer);
