import Layout from "./components/Layout/Layout";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

function App() {
  const { user } = useAuth0();

  React.useEffect(() => {
    console.log(user);
  });

  return <Layout />;
}

export default App;
