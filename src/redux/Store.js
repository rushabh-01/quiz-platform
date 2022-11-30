import { reducer } from "./Reducer";
import { combineReducers, createStore } from "redux";

// importing reducer to use all over project
const rootReducer = combineReducers({
  reducer,
});

const store = createStore(rootReducer);
export default store;
