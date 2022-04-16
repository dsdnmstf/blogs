import { DECREAMENT, INCREAMENT } from "../types/likeTypes";

export const increaseCount = () => {
  return { type: INCREAMENT };
};

export const decreaseCount = () => {
  return { type: DECREAMENT };
};
