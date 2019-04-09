import { SET_INGREDIENTS_SEARCH,
         RESET_INGREDIENTS_SEARCH,
         CLEAR_MISMATCH_NUM,
         SET_MISMATCH_NUM } from '../actions/types'


export default (state={withIngredients: false, misMatchNum: 0},action)=>{
  let newState = {...state}
  switch (action.type) {
    case SET_INGREDIENTS_SEARCH:
      newState.withIngredients = true
      return newState
    case RESET_INGREDIENTS_SEARCH:
      newState.withIngredients = false
      return newState
    case CLEAR_MISMATCH_NUM:
      return newState["misMatchNum"] = 0
    case SET_MISMATCH_NUM:
      return newState["misMatchNum"] = action.payload
    default:
      return state
  }
}
