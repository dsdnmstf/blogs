import { createStore, combineReducers } from "redux";
import firebaseReducers from "./reducers/firebaseReducers";
import countReducers from "./reducers/likeReducers";
const allReducers = combineReducers({
  firebase: firebaseReducers,
  count: countReducers,
});

export const combinedStore = () => {
  const store = createStore(allReducers);
  return store;
};
