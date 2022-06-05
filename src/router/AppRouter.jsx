import { BrowserRouter, Route, Routes } from "react-router-dom";

import PrivateRouter from "./PrivateRouter";
import Profile from "../pages/Profile";
import BlogDetail from "../pages/BlogDetail";
import MenuAppBar from "../components/MenuAppbar";
import LoginPage from "../pages/LoginPage";
import NewBlogPage from "../pages/NewBlogPage";
import RegisterPage from "../pages/RegisterPage";
import Home from "../pages/Home";
import UpdatePage from "../pages/UpdatePage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userStateChecker } from "../firebase/firebase";
const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    userStateChecker(dispatch);
  }, [dispatch]);
  return (
    <BrowserRouter>
      <MenuAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/newblog" element={<PrivateRouter />}>
          <Route path="" element={<NewBlogPage />} />
        </Route>
        <Route path="/profile" element={<PrivateRouter />}>
          <Route path="" element={<Profile />} />
        </Route>
        <Route path="/blogdetail/:id" element={<PrivateRouter />}>
          <Route path="" element={<BlogDetail />} />
        </Route>
        <Route path="/updatepage/:id" element={<PrivateRouter />}>
          <Route path="" element={<UpdatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
