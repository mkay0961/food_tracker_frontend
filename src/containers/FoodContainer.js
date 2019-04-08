import React from 'react'
import Food from '../components/Food'

const FoodContainer = (props) => (
 <div className="scrollable">
    {props.food.map((food, i)=><Food handleClick={props.handleClick} key={i} data={food}/>)}
 </div>
)

export default (FoodContainer)
