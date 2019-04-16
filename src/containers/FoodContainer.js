import React from 'react'
import Food from '../components/Food'
import { Card } from 'semantic-ui-react'

const FoodContainer = (props) => (
 <Card.Group className="test">
    {props.food.map((food, i)=><Food handleClick={props.handleClick} key={i} data={food}/>)}
 </Card.Group>
)

export default (FoodContainer)
