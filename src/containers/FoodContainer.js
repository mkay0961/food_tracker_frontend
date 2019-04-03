import React from 'react'
import { connect } from 'react-redux'
import Food from '../components/Food'
import { Visibility, Segment } from 'semantic-ui-react'

const FoodContainer = (props) => (
 <div className="scrollable">
    {props.food.map((food, i)=><Food key={i} data={food}/>)}
 </div>
);

const mapStateToProps = state =>({
  food: state.food
})

export default connect(mapStateToProps)(FoodContainer)
