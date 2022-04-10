import { SET_LOGIN, SET_LOGOUT } from "../types/alltypes";
const initialState = {
  currentUser: false,
};

const allReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, currentUser: action.payload };

    case SET_LOGOUT:
      return { ...state, currentUser: false };

    default:
      return state;
  }
};

export default allReducers;
