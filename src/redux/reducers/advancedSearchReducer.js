import { SET_INGREDIENTS_SEARCH,
         RESET_INGREDIENTS_SEARCH,
         SET_MISMATCH_NUM,
         CLEAR_MISMATCH_NUM } from '../actions/types'


export default (state={withIngredients: false, misNum: 0},action)=>{
  let newState = {...state}
  switch (action.type) {
    case SET_INGREDIENTS_SEARCH:
      newState.withIngredients = true
      return newState
    case RESET_INGREDIENTS_SEARCH:
      newState.withIngredients = false
      return newState
    case SET_MISMATCH_NUM:
      newState.misNum = action.payload
      return newState
    case CLEAR_MISMATCH_NUM:
      newState.misNum = 0
      return newState
    default:
      return state
  }
}
