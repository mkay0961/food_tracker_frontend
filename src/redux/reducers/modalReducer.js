import {SET_CURRENT, RESET_CURRENT, SET_SHOW_MODAL,RESET_SHOW_MODAL, SET_DETAIL_SHOW_MODAL,RESET_DETAIL_SHOW_MODAL} from '../actions/types'

export default (state={showModal:false, currentModal: null, showDetailModal: false},action)=>{
  let newState = {...state}
  switch (action.type) {
    case SET_CURRENT:
      newState.currentModal = action.payload;
      return newState
    case RESET_CURRENT:
      newState.currentModal = null;
      return newState
    case SET_SHOW_MODAL:
      newState.showModal = true;
      return newState;
    case RESET_SHOW_MODAL:
      newState.showModal = false;
      return newState;
    case SET_DETAIL_SHOW_MODAL:
      newState.showDetailModal = true;
      return newState;
    case RESET_DETAIL_SHOW_MODAL:
      newState.showDetailModal = false;
      return newState;
    default:
      return state;
  }
}
