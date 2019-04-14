import React from 'react'
import Recipe from '../components/Recipe'

const RecipeContainer = (props) => (
 <div>
   <div>
     <h1>Recipes</h1>
    </div>
    <div className="ui cards">
      {props.recipes.map((recipe,i)=> <Recipe handleClick={props.handleClick} key={i} data={recipe} /> )}
    </div>
 </div>
)

export default RecipeContainer
