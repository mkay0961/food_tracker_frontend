import { SET_ALL_FOODS } from '../actions/types'

export default (state=[],action)=>{
  switch (action.type) {
    case SET_ALL_FOODS:
      return action.payload
    default:
      return state
  }
}
