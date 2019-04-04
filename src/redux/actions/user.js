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

function addFoodsBackend(data){
  let obj={}
  obj["food"] = data
  return (dispatch) => {
    fetch(`${URLUSERFOODS}/1`,{
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

export {getUser,addFoodsBackend};
