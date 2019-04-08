import {SET_CURRENT, RESET_CURRENT, SET_SHOW_MODAL,RESET_SHOW_MODAL} from '../actions/types'

export default (state={showModal:false, currentModal: null},action)=>{
  let newState = {...state}
  switch (action.type) {
    case SET_CURRENT:
      newState.current = action.payload;
      return newState
    case RESET_CURRENT:
      newState.current = null;
      return newState
    case SET_SHOW_MODAL:
      newState.showModal = true;
      return newState;
    case RESET_SHOW_MODAL:
      newState.showModal = false;
      return newState;
    default:
      return state;
  }
}
