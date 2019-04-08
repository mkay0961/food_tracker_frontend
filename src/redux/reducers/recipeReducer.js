import { SET_ALL_RECIPES } from '../actions/types'

export default (state=[],action)=>{
  switch (action.type) {
    case SET_ALL_RECIPES:
      return action.payload
    default:
      return state
  }
}
