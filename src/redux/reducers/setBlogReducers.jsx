import { SET_BLOGS_DATA } from "../types/setBlogTypes";

const initialState = {
  blogs: [],
};

const setBlogReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_BLOGS_DATA:
      return { ...state, blogs: [...state.blogs, action.payload] };

    default:
      return state;
  }
};

export default setBlogReducers;
