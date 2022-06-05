import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const currentUser = useSelector((state) => state.firebase.currentUser);
  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ isToastify: true }} />
  );
};

export default PrivateRouter;
