import { SET_INGREDIENTS_SEARCH,
         RESET_INGREDIENTS_SEARCH,
         SET_MISMATCH_NUM,
         CLEAR_MISMATCH_NUM } from './types'

function setIngredientsSearch(){
  return { type: SET_INGREDIENTS_SEARCH }
}

function resetIngredientsSearch(){
  return { type: RESET_INGREDIENTS_SEARCH }
}

function setMisMatchNum(num){
  return { type: SET_MISMATCH_NUM, payload: num }
}

function clearMisMatchNum(){
  return { type: CLEAR_MISMATCH_NUM }
}


export { setIngredientsSearch, resetIngredientsSearch, setMisMatchNum, clearMisMatchNum }
