import React from 'react'
import Food from '../components/Food'
import { Card } from 'semantic-ui-react'

const Category = (props) => (  
 <Card>
    <h1>{props.name}</h1>
    <div>
      {props.food.map((item, i)=><Food key={i} data={item}/>)}
    </div>
 </Card>
)


export default (Category)
