import { combineReducers } from "redux"
import userReducer from './userReducer'
import recipeReducer from './recipeReducer'
import foodReducer from './foodReducer'

const rootReducer = combineReducers({
  user: userReducer,
  recipes:recipeReducer,
  food: foodReducer
})

export default rootReducer
