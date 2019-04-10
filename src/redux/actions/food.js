import { SET_ALL_FOODS,
         ADD_FOOD_TO_LIST,
         DEL_FOOD_FROM_LIST,
         EMPTY_LIST,
         URL_ALL_FOOD } from './types'

function getAllFoods(){
  return (dispatch) => {
    fetch(URL_ALL_FOOD)
    .then(res => res.json())
    .then(foods => {
      dispatch({ type: SET_ALL_FOODS, payload: foods })
    })
  }
}

function addFoodList(food){
  return { type: ADD_FOOD_TO_LIST, payload: food }
}
function emptyList(){
  return { type: EMPTY_LIST }
}
function delFoodList(food){
  return { type: DEL_FOOD_FROM_LIST, payload: food }
}

export { getAllFoods,
         addFoodList,
         delFoodList,
         emptyList }
