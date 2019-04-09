import { SET_INGREDIENTS_SEARCH,
         RESET_INGREDIENTS_SEARCH,
         CLEAR_MISMATCH_NUM,
         SET_MISMATCH_NUM } from './types'

function setIngredientsSearch(){
  return { type: SET_INGREDIENTS_SEARCH }
}

function resetIngredientsSearch(){
  return { type: RESET_INGREDIENTS_SEARCH }
}

function clearMisMatchNum(){
  return { type: CLEAR_MISMATCH_NUM }
}

function setMisMatchNum(num){
  return { type: SET_MISMATCH_NUM, payload: num }
}

export { setIngredientsSearch, resetIngredientsSearch, clearMisMatchNum, setMisMatchNum }
