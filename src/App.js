import React from "react";
import Dashboard from "./components/dashboard";
import Auth from "./components/auth";
import "./App.scss";
import "./styles/signin.scss";
import { useUserContext } from "./context/userContext";
import Loading from "./components/loading";

function App() {
  const { loading, user } = useUserContext();
  return (
    <div className="App">
      {loading ? <Loading /> : <>{user ? <Dashboard /> : <Auth />}</>}
    </div>
  );
}

export default App;
