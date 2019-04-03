import { combineReducers } from "redux"
import userReducer from './userReducer'
import recipeReducer from './recipeReducer'
import foodReducer from './foodReducer'
import eatenFoodReducer from './eatenFoodReducer'

const rootReducer = combineReducers({
  user: userReducer,
  recipes:recipeReducer,
  food: foodReducer,
  addFoodList: eatenFoodReducer
})

export default rootReducer
