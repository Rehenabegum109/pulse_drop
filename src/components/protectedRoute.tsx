import { Navigate } from "react-router-dom";
import { useAuth } from "./pages/auth/authContext";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, token } = useAuth();

  if (!user || !token) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}