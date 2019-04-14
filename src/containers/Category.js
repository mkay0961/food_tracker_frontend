import React from 'react'
import Food from '../components/Food'
import { Card } from 'semantic-ui-react'

const Category = (props) => (
 <div>
    <h1>{props.name}</h1>
    <div className="ui cards">
      {props.food.map((item, i)=><Food key={i} data={item}/>)}
    </div>
 </div>
)


export default (Category)
