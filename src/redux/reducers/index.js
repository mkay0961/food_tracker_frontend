import { combineReducers } from "redux"
import userReducer from './userReducer'
import recipeReducer from './recipeReducer'
import allFoodReducer from './allFoodReducer'
import addFoodReducer from './addFoodReducer'
import searchReducer from './searchReducer'
import searchPageReducer from './searchPageReducer'
import advancedSearchReducer from './advancedSearchReducer'

const rootReducer = combineReducers({
  user: userReducer,
  recipes:recipeReducer,
  food: allFoodReducer,
  addFoodList: addFoodReducer,
  search: searchReducer,
  searchPage: searchPageReducer,
  advancedSearch: advancedSearchReducer
})

export default rootReducer
