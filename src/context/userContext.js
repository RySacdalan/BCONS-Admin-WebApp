const { createContext, useState } = require("react");

const Usercontext = createContext({});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");

  const registerUser = (email, name, password) => {
    ///
  };

  const signInUser = (email, name) => {
    ///
  };

  const logOut = () => {
    ///
  };

  const forgotPassword = (email) => {
    ///
  };

  const contextValue = {};
  return (
    <Usercontext.Provider value={contextValue}>{children}</Usercontext.Provider>
  );
};
