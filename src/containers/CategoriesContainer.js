import React, {Component} from 'react';
import Category from './Category'
import { connect } from 'react-redux'


class CategoriesContainer extends Component {

  generateCategories = () =>{
    console.log(this.props.foods);

    return this.props.foods.map((item)=>item.Category)
  }

  render() {
    return (
      <div>
         {this.generateCategories().map((cat)=>{
           return <Category name={cat}/>
         })}
      </div>
    )
  }
}

const mapStateToProps = state =>({
  foods: state.user.foods
})

export default connect(mapStateToProps)(CategoriesContainer);
