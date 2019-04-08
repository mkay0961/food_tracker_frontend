import {SET_USER} from './types'

const URL = `http://localhost:3000/users`
const URLUSERFOODS = `http://localhost:3000/user_foods`


function getUser(id){
  return (dispatch) => {
    fetch(`${URL}/${id}`)
    .then(res => res.json())
    .then(user => {
      dispatch({type: SET_USER, payload: user})
    })
  }
}

function addFoodsBackend(){
  return (dispatch, getState) => {
    let obj = {}
    obj["food"] = getState().addFoodList
    obj["id"] = getState().user.id
    fetch(`${URLUSERFOODS}`,{
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

function updateFoodsBackend(){
  return (dispatch, getState) => {
    debugger
    let obj = {}
    obj["food"] = getState().addFoodList
    obj["id"] = getState().user.id
    fetch(`${URLUSERFOODS}`,{
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


export {getUser,addFoodsBackend};
