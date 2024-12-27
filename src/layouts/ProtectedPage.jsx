/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

function ProtectedPage() {
  const user = {
    id: "1",
    name: "John Doe",
    email: "example@eg.com",
    role: "admin",
    password: "123456",
  };
  
  if (!user) {

   return <Navigate to={"/login"} replace />;
  }
  if (!!user && user.role !== "admin") {
   return <Navigate to={"/not-found"} replace />;
  }
  return <Outlet/>;
}

export default ProtectedPage;
