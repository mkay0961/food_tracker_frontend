import React from 'react'
import Recipe from '../components/Recipe'
import { connect } from 'react-redux'

const genRecipeComponents = (recipes) =>{
  return recipes.map((recipe, i)=> <Recipe key={i} data={recipe} /> )
}

const SavedRecipesContainer = (props) => (
 <div className="ui card">
    Saved Recipes Container
    {genRecipeComponents(props.saveRecipes)}
 </div>
)

const mapStateToProps = state =>({
  saveRecipes: state.user.recipes
})

export default connect(mapStateToProps)(SavedRecipesContainer)
