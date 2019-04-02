import React from 'react';
import { connect } from 'react-redux'
import Food from '../components/Food'

// const genFoodComponents = (food) =>{
//   return food.map((item, i)=><Food data={item}/>)
// }

const Category = (props) => (
 <div className="ui card">
    <h1>{props.name}</h1>
    <div>
    {props.food.map((item)=><Food data={item}/>)}
    </div>
 </div>
);


export default (Category);
