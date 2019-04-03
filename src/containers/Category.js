import React from 'react';
import Food from '../components/Food'

// const genFoodComponents = (food) =>{
//   return food.map((item, i)=><Food data={item}/>)
// }

const Category = (props) => (
 <div className="ui card">
    <h1>{props.name}</h1>
    <div>
    {props.food.map((item, i)=><Food key={i} data={item}/>)}
    </div>
 </div>
);


export default (Category);
