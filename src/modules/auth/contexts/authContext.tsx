import { Spinner } from "common/components";
import { User } from "common/types";
import { auth } from "firebase-config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { deleteLSItem } from "utils/webStorage";
import { getUserData } from "../api";
import { Login } from "../types";

type AuthContextState = {
  login: Login;
  logout: () => Promise<void>;
  user: User | null;
};

const AuthContext = createContext<AuthContextState | null>(null);

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [userInfo, isCheckingAuth] = useAuthState(auth);
  const [isLoadingUserData, setIsLoadingUserData] = useState(false);

  useEffect(() => {
    if (!userInfo) return;
    (async () => {
      setIsLoadingUserData(true);
      try {
        const userData = await getUserData(userInfo.uid);
        setUser(userData);
      } catch (err: any) {}
      setIsLoadingUserData(false);
    })();
  }, [userInfo]);

  const login: Login = async (loginFormValues) => {
    const { email, password } = loginFormValues;
    const {
      user: { uid },
    } = await signInWithEmailAndPassword(auth, email, password);
    const userData = await getUserData(uid);
    setUser(userData);
    return userData;
  };

  const logout = async () => {
    await signOut(auth);
    deleteLSItem("auth");
    setUser(null);
  };

  if (isCheckingAuth || isLoadingUserData)
    return <Spinner fullPage size="large" />;

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("AuthContext must be used within provider");
  }
  return context;
};

export { useAuth };
export default AuthContextProvider;
