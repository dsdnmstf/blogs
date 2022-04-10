import { ActionCodeOperation } from "firebase/auth";
import { SET_LOGIN, SET_LOGOUT } from "../types/alltypes";

export const setCurrentUserTrue = (payload) => {
  return { type: SET_LOGIN, payload:payload };
};
export const setCurrentUserFalse=()=>{
    return { type: SET_LOGOUT };
}