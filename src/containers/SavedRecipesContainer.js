import React from 'react';
import Recipe from '../components/Recipe'

import { connect } from 'react-redux'

const genRecipeComponents = (recipes) =>{
  return recipes.map((recipe)=><Recipe data={recipe} />)
}


const SavedRecipesContainer = (props) => (
 <div>
    Saved Recipes Container
    {genRecipeComponents(props.saveRecipes)}
 </div>
);

const mapStateToProps = state =>({
  saveRecipes: state.user.recipes
})

export default connect(mapStateToProps)(SavedRecipesContainer);
