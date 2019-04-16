import React from 'react'
import Recipe from '../components/Recipe'
import { connect } from 'react-redux'

const genRecipeComponents = (recipes, props) =>{
  return recipes.map((recipe, i)=> <Recipe key={i} data={recipe} handleClick={props.handleClick} /> )
}

const SavedRecipesContainer = (props) => (
 <div className="ui card">
    <h1>Saved Recipes Container</h1>
    {genRecipeComponents(props.saveRecipes, props)}
 </div>
)

const mapStateToProps = state =>({
  saveRecipes: state.user.recipes
})

export default connect(mapStateToProps, null)(SavedRecipesContainer)
