import Dashboard from "./components/dashboard";
import Auth from "./components/auth";
import "./App.scss";
import "./styles/signin.scss";
import { useUserContext } from "./context/userContext";

function App() {
  const { error, loading, user } = useUserContext();
  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <>{user ? <Dashboard /> : <Auth />}</>}
    </div>
  );
}

export default App;
