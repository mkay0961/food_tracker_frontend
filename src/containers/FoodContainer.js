import React from 'react'
import Food from '../components/Food'
import { Visibility, Segment } from 'semantic-ui-react'

const FoodContainer = (props) => (
 <div className="scrollable">
    {props.food.map((food, i)=><Food handleClick={props.handleClick} key={i} data={food}/>)}
 </div>
);

export default (FoodContainer)
