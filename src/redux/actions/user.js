const URL = `http://localhost:3000/users`

function getUser(id){
  return (dispatch) => {
    fetch(`${URL}/${id}`)
    .then(res => res.json())
    .then(user => {
      // debugger
      dispatch({type: "SET_USER", payload: user})
      //{type: "FETCHED_PAINTINGS", paintings}
    })
  }
}

export {getUser};
