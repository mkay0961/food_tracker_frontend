import React from 'react';
import Navbar from '../components/Navbar'
import Recipe from '../components/Recipe'
import { connect } from 'react-redux'

const genRecipeComponents = (recipes) =>{
  return recipes.map((recipe)=><Recipe data={recipe} />)
}

const RecipeContainer = (props) => (
 <div>
    welcome to container page
    {genRecipeComponents(props.recipes)}
 </div>
);

const mapStateToProps = state =>({
  recipes: state.recipes
})

export default connect(mapStateToProps)(RecipeContainer);
