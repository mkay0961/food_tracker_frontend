import {SET_USER} from './types'

const URL = `http://localhost:3000/users`

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
    fetch(`${URL}/1`,{
      method: 'PATCH',
      body: JSON.stringify(obj),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(user => {
      // dispatch({type: SET_USER, payload: user}
      console.log(user);

    })
  }
}

export {getUser,addFoodsBackend};
