// import { combineReducers } from "redux";
//
// // const loadingReducer = (state=false, action) => {
// //   switch(action.type){
// //     case "LOADING_FOODS":
// //       return true
// //     case "FETCHED_FOODS":
// //       return false
// //     default:
// //       return state
// //   }
// // }
//
// const foodsReducer = (state = [], action) => {
//   switch (action.type) {
//     case "FETCHED_FOODS":
//       return action.foods
//     default:
//       return state;
//   }
// };
//
//
// const rootReducer = combineReducers({
//   food: foodsReducer,
// });
//
// export default rootReducer;
