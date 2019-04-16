import React from 'react'
import Recipe from '../components/Recipe'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'


const genRecipeComponents = (recipes, props) =>{
  return recipes.map((recipe, i)=> <Recipe key={i} data={recipe} handleClick={props.handleClick} /> )
}

const SavedRecipesContainer = (props) => (
 <Segment color="orange" className="savedRec opac">
    <h1>Saved Recipes</h1>
    <Segment className="ui cards opac">
    {genRecipeComponents(props.saveRecipes, props)}
    </Segment>
 </Segment>
)

const mapStateToProps = state =>({
  saveRecipes: state.user.recipes
})

export default connect(mapStateToProps, null)(SavedRecipesContainer)
