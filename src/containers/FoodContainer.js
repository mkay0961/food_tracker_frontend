import React from 'react'
import Food from '../components/Food'
import { Card } from 'semantic-ui-react'
import InfiniteScroll from 'react-infinite-scroller';

const loadFunc = () => {
  console.log("hi");
}

const FoodContainer = (props) => (
 <Card.Group className="test">
    {props.food.map((food, i)=><Food handleClick={props.handleClick} key={i} data={food}/>)}
 </Card.Group>
)

export default (FoodContainer)
