import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  setCurrentUserFalse,
  setCurrentUserTrue,
} from "../redux/actions/allActions";

const firebaseConfig = {
  apiKey: "AIzaSyCAwqtxXzg2THhpQBrc252xmqI4by4-1nc",
  authDomain: "blogs-e852e.firebaseapp.com",
  projectId: "blogs-e852e",
  storageBucket: "blogs-e852e.appspot.com",
  messagingSenderId: "820993512566",
  appId: "1:820993512566:web:fb24c2b5783fa8575cbb57",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const userStateChecker = (dispatch) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      dispatch(setCurrentUserTrue(currentUser));
    } else {
      dispatch(setCurrentUserFalse());
    }
  });
};
