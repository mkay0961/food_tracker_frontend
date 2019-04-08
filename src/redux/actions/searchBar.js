import {SET_SEARCH, CLEAR_SEARCH} from './types'

function setSearch(text){
  return {type: SET_SEARCH, payload: text}
}
function clearSearch(){
  return {type: CLEAR_SEARCH}
}

export {setSearch,clearSearch};
