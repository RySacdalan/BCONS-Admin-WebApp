import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
const { createContext, useState, useEffect, useContext } = require("react");

const Usercontext = createContext({});

export const useUserContext = () => useContext(Usercontext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  // useEffect(() => {
  //   setLoading(true);
  //   const unsubscribe = onAuthStateChanged(auth, (res) => {
  //     res ? setUser(res) : setUser(null);
  //     setError("");
  //     setLoading(false);
  //   });
  //   return unsubscribe;
  // }, []);

  //Register admin user
  const registerUser = (email, name, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      return updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  };

  //SignIn admin user
  const signInUser = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //Logging Out the User
  const logOut = () => {
    signOut(auth);
  };

  //Forgot password
  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const contextValue = {
    error,
    loading,
    user,
    registerUser,
    signInUser,
    logOut,
    forgotPassword,
  };
  return (
    <Usercontext.Provider value={contextValue}>{children}</Usercontext.Provider>
  );
};
