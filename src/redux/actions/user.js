import { SET_USER } from './types'

const URL = `http://localhost:3000/users`
const URL_USER_FOODS = `http://localhost:3000/user_foods`


function getUser(id){
  return (dispatch) => {
    fetch(`${URL}/${id}`)
    .then(res => res.json())
    .then(user => {
      dispatch({ type: SET_USER, payload: user })
    })
  }
}

function addFoodsBackend(){
  return (dispatch, getState) => {
    let obj = {}
    obj["food"] = getState().addFoodList
    obj["id"] = getState().user.id
    fetch(`${URL_USER_FOODS}`,{
      method: 'POST',
      body: JSON.stringify(obj),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(user => {
      dispatch({type: SET_USER, payload: user})
    })
  }
}

function eatFoodsBackend(){
  return (dispatch, getState) => {
    let obj = {}
    obj["food"] = getState().addFoodList
    obj["id"] = getState().user.id
    fetch(`${URL_USER_FOODS}/eat`,{
      method: 'PATCH',
      body: JSON.stringify(obj),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(user => {
      dispatch({type: SET_USER, payload: user})
    })
  }
}


export { getUser, addFoodsBackend, eatFoodsBackend }
