import {ADD_FOOD_TO_LIST, DEL_FOOD_FROM_LIST, EMPTY_LIST} from '../actions/types'

export default (state=[],action)=>{
  switch (action.type) {
    case ADD_FOOD_TO_LIST:
      return [...state, action.payload];
    case DEL_FOOD_FROM_LIST:
      return state.filter((food)=>{
        if(food !== action.payload){
          return food
        }
      });
    case EMPTY_LIST:
      return [];
    default:
      return state;
  }
}
