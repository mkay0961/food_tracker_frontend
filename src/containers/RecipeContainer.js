import React from 'react'
import Recipe from '../components/Recipe'
import { connect } from 'react-redux'

const RecipeContainer = (props) => (
 <div className="ui card">
    <h1>Recipes</h1>
    {props.recipes.filter((recipe)=>recipe.title.toLowerCase().includes(props.search.toLowerCase())).map((recipe,i)=> <Recipe handleClick={props.handleClick} key={i} data={recipe} /> )}
 </div>
)

const mapStateToProps = state =>({
  recipes: state.recipes,
  search: state.search
})

export default connect(mapStateToProps, null)(RecipeContainer)
