import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { UserContext } from "@components/UserContextProvider";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}
