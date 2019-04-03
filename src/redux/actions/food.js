import {SET_ALL_FOODS,ADD_FOOD_TO_LIST,DEL_FOOD_FROM_LIST,EMPTY_LIST} from './types'

const URL = `http://localhost:3000/foods`

function getAllFoods(){
  return (dispatch) => {
    fetch(`${URL}`)
    .then(res => res.json())
    .then(foods => {
      dispatch({type: SET_ALL_FOODS, payload: foods})
    })
  }
}

function addFoodsBackend(){
  return (dispatch) => {
    debugger
    // fetch(`${URL}`)
    // .then(res => res.json())
    // .then(foods => {
    //   dispatch({type: SET_ALL_FOODS, payload: foods})
    // })
  }
}

//
function addFoodList(food){
  return {type: ADD_FOOD_TO_LIST, payload: food}
}
function delFoodList(food){
  return {type: DEL_FOOD_FROM_LIST, payload: food}
}

// const name = (payload) =>{
//   return {type: _____, payload:payload}
// }

export {getAllFoods,addFoodList,delFoodList,addFoodsBackend};
