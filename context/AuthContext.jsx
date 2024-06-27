import * as SecureStore from "expo-secure-store";
import React from "react";

const AuthContext = React.createContext(null);

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
 
export function AuthProvider(props) {
  const [token, setAuth] = React.useState(null);

  React.useEffect(() => {
    fetchAuthToken();
  }, []);

  const fetchAuthToken = async () => {
    const token = await SecureStore.getItemAsync("TOKEN");
    if (token) {
      setAuth(token);
    }
  };

  const signIn = async (token) => {
    await SecureStore.setItemAsync("TOKEN", token);
    setAuth(token);
  };

  const signOut = async () => {
    await SecureStore.deleteItemAsync("TOKEN");
    setAuth(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        token,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
