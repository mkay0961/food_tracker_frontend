import { SET_INGREDIENTS_SEARCH,
         RESET_INGREDIENTS_SEARCH } from '../actions/types'


export default (state={withIngredients: false},action)=>{
  let newState = {...state}
  switch (action.type) {
    case SET_INGREDIENTS_SEARCH:
      newState.withIngredients = true
      return newState
    case RESET_INGREDIENTS_SEARCH:
      newState.withIngredients = false
      return newState
    default:
      return state
  }
}
