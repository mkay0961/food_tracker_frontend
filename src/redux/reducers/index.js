import { combineReducers } from "redux"
import userReducer from './userReducer'
import recipeReducer from './recipeReducer'
import foodReducer from './foodReducer'
import eatenFoodReducer from './eatenFoodReducer'
import searchReducer from './searchReducer'


const rootReducer = combineReducers({
  user: userReducer,
  recipes:recipeReducer,
  food: foodReducer,
  addFoodList: eatenFoodReducer,
  search: searchReducer
})

export default rootReducer
