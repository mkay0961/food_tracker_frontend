import {SET_CURRENT, RESET_CURRENT, SET_SHOW_MODAL, RESET_SHOW_MODAL} from './types'

function setCurretModal(data){
  return {type: SET_CURRENT, payload: data}
}

function resetCurrentModal(){
  return {type: RESET_CURRENT}
}

function setShowModal(){
  return {type: SET_SHOW_MODAL}
}

function resetShowModal(){
  return {type: RESET_SHOW_MODAL}
}

export {setCurretModal, resetCurrentModal, setShowModal, resetShowModal};
