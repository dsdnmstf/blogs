import { SET_BLOGS_DATA } from "../types/setBlogTypes";

export const setBlogsData = (payload) => {
  return { type: SET_BLOGS_DATA, payload: payload };
};
