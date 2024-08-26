import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/typedRedux";

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const isAuthenticated = useAppSelector((state) => state.token.token) !== null;
  return isAuthenticated ? element : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
