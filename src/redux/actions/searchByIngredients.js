import { SET_INGREDIENTS_SEARCH,
         RESET_INGREDIENTS_SEARCH } from './types'

function setIngredientsSearch(){
  return { type: SET_INGREDIENTS_SEARCH }
}

function resetIngredientsSearch(){
  return { type: RESET_INGREDIENTS_SEARCH }
}


export { setIngredientsSearch, resetIngredientsSearch }
