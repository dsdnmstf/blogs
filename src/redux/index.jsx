import { createStore, combineReducers } from "redux";
import firebaseReducers from "./reducers/firebaseReducers";
import setBlogReducers from "./reducers/setBlogReducers";
const allReducers = combineReducers({
  firebase: firebaseReducers,
  setBlogs: setBlogReducers,
});

export const combinedStore = () => {
  const store = createStore(allReducers);
  return store;
};
