import { SET_ALL_RECIPES, URL_ALL_RECIPES } from './types'

function getAllRecipes(){
  return (dispatch) => {
    fetch(URL_ALL_RECIPES)
    .then(res => res.json())
    .then(recipes => {
      dispatch({ type: SET_ALL_RECIPES, payload: recipes })
    })
  }
}

export { getAllRecipes }
