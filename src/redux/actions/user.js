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

export {getUser};
