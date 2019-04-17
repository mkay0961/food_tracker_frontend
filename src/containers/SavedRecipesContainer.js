import React from 'react'
import Recipe from '../components/Recipe'
import { connect } from 'react-redux'
import { Segment, Button } from 'semantic-ui-react'


const genRecipeComponents = (recipes, props) =>{
  return recipes.map((recipe, i)=> <Button className="recipeButton"><Recipe key={i} data={recipe} handleClick={props.handleClick} /></Button> )
}

const SavedRecipesContainer = (props) => (
 <div color="orange" className="savedRec opac outlineOrange2">
    <h1>Saved Recipes</h1>
    <Segment className="ui cards opac">
      {genRecipeComponents(props.saveRecipes, props)}
    </Segment>
 </div>
)

const mapStateToProps = state =>({
  saveRecipes: state.user.recipes
})

export default connect(mapStateToProps, null)(SavedRecipesContainer)
