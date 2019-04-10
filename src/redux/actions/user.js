import { SET_USER, CLEAR_USER } from './types'

const URL = `http://localhost:3000/users`
const URL_USER_FOODS = `http://localhost:3000/user_foods`
const URL_FAV_RECIPES = `http://localhost:3000/user_recipes`


function getUser(){
  return (dispatch) => {
    fetch('http://localhost:3000/users', {
      method: 'GET',
      headers: {
        Authentication: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then((user) =>{
        dispatch({type: SET_USER, payload: user})
      })
  }
}

function loginUser(username, password){
  return (dispatch) => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
          username: username,
          password: password
      })
    }).then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw response
        }
      }).then((auth) => {
        localStorage.setItem('token', auth.token)
        dispatch({type: SET_USER, payload: auth.user})
      })
      // .catch(r => r.json().then(e => console.log(e.message)))
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
        'Content-Type': 'application/json',
        Authentication: `Bearer ${localStorage.getItem('token')}`
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
        'Content-Type': 'application/json',
        Authentication: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(user => {
      dispatch({type: SET_USER, payload: user})
    })
  }
}

function addFavRecipe(recipeId){
  return (dispatch, getState) => {
    let obj = {}
    obj["recipeId"] = recipeId
    obj["userId"] = getState().user.id
    console.log("addfaverecipe user:", getState().user.id, "recipe:",recipeId );
    fetch(`${URL_FAV_RECIPES}`,{
      method: 'POST',
      body: JSON.stringify(obj),
      headers:{
        'Content-Type': 'application/json',
        Authentication: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(user => {
      dispatch({type: SET_USER, payload: user})
    })
  }
}
function removeFavRecipe(recipeId){
  return (dispatch, getState) => {
    let obj = {}
    obj["recipeId"] = recipeId
    obj["userId"] = getState().user.id
    console.log("removefaverecipe user:", getState().user.id, "recipe:",recipeId );
    fetch(`${URL_FAV_RECIPES}`,{
      method: 'DELETE',
      body: JSON.stringify(obj),
      headers:{
        'Content-Type': 'application/json',
        Authentication: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(user => {
      dispatch({type: SET_USER, payload: user})
    })
  }
}

function clearUser(){
  return { type: CLEAR_USER }
}


export { getUser, addFoodsBackend, eatFoodsBackend, addFavRecipe, removeFavRecipe, loginUser, clearUser }
