import React from 'react'
import Recipe from '../components/Recipe'
import { List } from 'semantic-ui-react'

const RecipeContainer = (props) => (
 <List animated divided verticalAlign='middle' size={"big"} className="recipesHold">
      {props.recipes.map((recipe,i)=> <Recipe handleClick={props.handleClick} key={i} data={recipe} /> )}
 </List>
)

export default RecipeContainer
