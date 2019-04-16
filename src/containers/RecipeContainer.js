import React from 'react'
import Recipe from '../components/Recipe'

const RecipeContainer = (props) => (
 <div className="ui cards recipesHold">
      {props.recipes.map((recipe,i)=> <Recipe handleClick={props.handleClick} key={i} data={recipe} /> )}
 </div>
)

export default RecipeContainer
