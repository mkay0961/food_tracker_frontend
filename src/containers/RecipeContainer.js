import React from 'react';
import Recipe from '../components/Recipe'
import { connect } from 'react-redux'

// const genRecipeComponents = (recipes) =>{
//   return recipes.map((item, i)=><Recipe data={item}/>)
// }


const RecipeContainer = (props) => (
 <div className="ui card">
    <h1>Recipes</h1>
    {props.recipes.map((recipe,i)=> <Recipe key={i} data={recipe} /> )}
 </div>
);

const mapStateToProps = state =>({
  recipes: state.recipes
})

export default connect(mapStateToProps)(RecipeContainer);
