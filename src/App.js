import React from "react";
import Dashboard from "./components/dashboard";
import Auth from "./components/auth";
import "./App.scss";
import "./styles/signin.scss";
import { useUserContext } from "./context/userContext";
import Loading from "./components/loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { loading, user } = useUserContext();
  return (
    <div className="App">
      <ToastContainer position="top-center" pauseOnHover={false} />
      {loading ? <Loading /> : <>{user ? <Dashboard /> : <Auth />}</>}
    </div>
  );
}

export default App;
