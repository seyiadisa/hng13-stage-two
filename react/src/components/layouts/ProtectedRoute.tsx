import { isAuthenticated } from "@ticketapp/shared";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/auth/login");
    }
  });

  return children;
}
