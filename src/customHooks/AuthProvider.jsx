import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // State For Signup Data
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  // State For Login Data
  const [currentUser, setCurrentUser] = useState("");
  // call this function for creating user account
  const signup = (data) => {
    setUser({
      username: data.username,
      email: data.email,
      password: data.password,
    });
  };

  // call this function when you want to authenticate the user
  const login = (data) => {
    setCurrentUser(data);
  };

  // call this function to sign out logged in user
  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        currentUser,
        setCurrentUser,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
