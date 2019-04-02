const URL = `http://localhost:3000/recipes`

function getAllRecipes(){
  return (dispatch) => {
    fetch(`${URL}`)
    .then(res => res.json())
    .then(recipes => {
      // debugger
      dispatch({type: "SET_ALL_RECIPES", payload: recipes})
      //{type: "FETCHED_PAINTINGS", paintings}
    })
  }
}

export {getAllRecipes};
