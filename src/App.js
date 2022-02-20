import Dashboard from "./components/dashboard";
import Auth from "./components/auth";
import "./App.css";
import { useState } from "react";

function App() {
  const [user] = useState(false);

  return <div className="App">{user ? <Dashboard /> : <Auth />}</div>;
}

export default App;
