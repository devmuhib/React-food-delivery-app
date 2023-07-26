import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  React.useEffect(() => {
    console.log(isAuthenticated);
  }, []);

  return isAuthenticated ? (
    <div>Logout</div>
  ) : (
    <div onClick={() => loginWithRedirect()}>Login</div>
  );
};

export default Login;
