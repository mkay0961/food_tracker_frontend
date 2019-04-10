import { SET_SEARCH_PAGE, CLEAR_SEARCH_PAGE } from './types'

function setSearchPage(text){
  return { type: SET_SEARCH_PAGE, payload: text }
}
function clearSearchPage(){
  return { type: CLEAR_SEARCH_PAGE }
}

export { setSearchPage, clearSearchPage }
