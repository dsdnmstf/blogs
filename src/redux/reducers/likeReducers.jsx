import { INCREAMENT, DECREAMENT } from "../types/likeTypes";
const initialState = {
  count: 0,
};
const countReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREAMENT:
      return { ...state, count: state.count + 1 };

    case DECREAMENT:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

export default countReducers;
