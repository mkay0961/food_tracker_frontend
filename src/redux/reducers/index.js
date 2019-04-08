import { combineReducers } from "redux"
import userReducer from './userReducer'
import recipeReducer from './recipeReducer'
import foodReducer from './foodReducer'
import addFoodReducer from './addFoodReducer'
import searchReducer from './searchReducer'
// import modalReducer from './modalReducer'


const rootReducer = combineReducers({
  user: userReducer,
  recipes:recipeReducer,
  food: foodReducer,
  addFoodList: addFoodReducer,
  search: searchReducer
})

export default rootReducer
