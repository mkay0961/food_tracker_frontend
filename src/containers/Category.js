import React from 'react'
import Food from '../components/Food'
import { Item, Popup } from 'semantic-ui-react'


const Category = (props) => (
 <div>
    <h1>{props.name}</h1>
    <Item.Group divided>
      {props.food.map((item, i)=><Popup
        trigger={<Food key={i} data={item}/>}
        content="The default theme's basic popup removes the pointing arrow."
        basic
        />)}
    </Item.Group>
 </div>
)


export default (Category)
