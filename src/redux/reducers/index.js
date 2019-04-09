import { combineReducers } from "redux"
import userReducer from './userReducer'
import recipeReducer from './recipeReducer'
import allFoodReducer from './allFoodReducer'
import addFoodReducer from './addFoodReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
  user: userReducer,
  recipes:recipeReducer,
  food: allFoodReducer,
  addFoodList: addFoodReducer,
  search: searchReducer
})

export default rootReducer
