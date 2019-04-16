import React from 'react'
import Recipe from '../components/Recipe'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'


const genRecipeComponents = (recipes, props) =>{
  return recipes.map((recipe, i)=> <Recipe key={i} data={recipe} handleClick={props.handleClick} /> )
}

const SavedRecipesContainer = (props) => (
 <Segment color="orange" className="ui card savedRec">
    <h1>Saved Recipes</h1>
    {genRecipeComponents(props.saveRecipes, props)}
 </Segment>
)

const mapStateToProps = state =>({
  saveRecipes: state.user.recipes
})

export default connect(mapStateToProps, null)(SavedRecipesContainer)
