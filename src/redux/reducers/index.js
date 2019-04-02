import { combineReducers } from "redux";
import userreducer from './userReducer';

const rootReducer = combineReducers({
  user: userreducer
});

export default rootReducer;
