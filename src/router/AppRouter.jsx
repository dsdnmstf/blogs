import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PrivateRouter from "./PrivateRouter";
import Profile from "../pages/Profile";
import BlogDetail from "../pages/BlogDetail";
import MenuAppBar from "../components/MenuAppbar";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NewBlogPage from "../pages/NewBlogPage";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <MenuAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" elment={<RegisterPage />} />
        <Route path="/newblog" element={<PrivateRouter />}>
          <Route path="" element={<NewBlogPage />} />
        </Route>
        <Route path="/profile" element={<PrivateRouter />}>
          <Route path="" element={<Profile />} />
        </Route>
        <Route path="/blogdetail" element={<PrivateRouter />}>
          <Route path="" element={<BlogDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
