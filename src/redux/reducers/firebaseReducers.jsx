import { SET_LOGIN, SET_LOGOUT } from "../types/firebaseTypes";
const initialState = {
  currentUser: false,
};

const firebaseReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOGIN:
      return { ...state, currentUser: payload };

    case SET_LOGOUT:
      return { ...state, currentUser: false };

    default:
      return state;
  }
};

export default firebaseReducers;
