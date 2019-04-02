import React from 'react';
import { connect } from 'react-redux'
import Food from '../components/Food'

const genFoodComponents = (food) =>{
  return food.map((item)=>{
      return <Food data={item}/>
    })

}

const Category = (props) => (
 <div>
    <h1>{props.name}</h1>
    <div>
    {genFoodComponents(props.food)}
    </div>
 </div>
);


export default (Category);
