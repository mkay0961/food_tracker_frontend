import {SET_ALL_FOODS} from './types'

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

// const name = (payload) =>{
//   return {type: _____, payload:payload}
// }

export {getAllFoods};
