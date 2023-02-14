import { doc, setDoc } from "@firebase/firestore";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Spinner } from "common/components";
import { AccountType, User } from "common/types";
import { auth, db } from "firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext } from "react";
import { getUserData } from "../api";
import useFirebaseAuthState from "../hooks/useFirebaseAuthState";
import { CreateAdmin, Login } from "../types";

type AuthContextState = {
  login: Login;
  logout: () => Promise<void>;
  user: User | undefined;
  createAdmin: CreateAdmin;
};

const AuthContext = createContext<AuthContextState | null>(null);

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const { userInfo, isCheckingAuth } = useFirebaseAuthState(auth);

  const queryClient = useQueryClient();

  const setUserData = (user: User | undefined) =>
    queryClient.setQueryData(["user", userInfo?.uid], () => user);

  const { data: user, isInitialLoading: isLoadingUserData } = useQuery(
    ["user", userInfo?.uid],
    () => getUserData(userInfo!.uid),
    { enabled: !!userInfo }
  );
  const login: Login = async (loginFormValues) => {
    const { email, password } = loginFormValues;
    const {
      user: { uid },
    } = await signInWithEmailAndPassword(auth, email, password);
    const userData = await getUserData(uid);

    return userData;
  };

  const logout = async () => {
    await signOut(auth);
    setUserData(undefined);
  };

  const createAdmin: CreateAdmin = async (email, password, schoolName) => {
    const {
      user: { uid },
    } = await createUserWithEmailAndPassword(auth, email, password);
    const userDocRef = doc(db, "users", uid);
    const schoolDocRef = doc(db, "schools", uid);
    const accountType: AccountType = "admin";
    await setDoc(userDocRef, { email, accountType, schoolId: uid });
    await setDoc(schoolDocRef, { schoolName });
  };
  if (isCheckingAuth || isLoadingUserData)
    return <Spinner fullPage size="large" />;

  return (
    <AuthContext.Provider value={{ user, login, logout, createAdmin }}>
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
