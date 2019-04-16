import React from 'react'
import FoodForPage from '../components/FoodForPage'
import { Item } from 'semantic-ui-react'


const Category = (props) => (
 <div>
    <h1>{props.name}</h1>
    <Item.Group divided>
      {props.food.map((item, i)=><FoodForPage key={i} data={item}/>)}
    </Item.Group>
 </div>
)


export default (Category)
