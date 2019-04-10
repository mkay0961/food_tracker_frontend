import { SET_SEARCH_PAGE, CLEAR_SEARCH_PAGE } from '../actions/types'

export default (state="",action)=>{
  switch (action.type) {
    case SET_SEARCH_PAGE:
      return action.payload
    case CLEAR_SEARCH_PAGE:
      return ""
    default:
      return state
  }
}
