import Dashboard from "./components/dashboard";
import Auth from "./components/auth";
import "./App.scss";
import "./styles/signin.scss";
import { useUserContext } from "./context/userContext";

function App() {
  const { loading, user } = useUserContext();
  return (
    <div className="App">
      {loading ? <h2>Loading...</h2> : <>{user ? <Dashboard /> : <Auth />}</>}
    </div>
  );
}

export default App;
