import { doc, getDoc } from "@firebase/firestore";
import { User } from "common/types";
import { db } from "firebase-config";
import { parseDocRef } from "utils/firebaseHelpers";

export const getUserData = async (userId: string) => {
  const userDoc = doc(db, "users", userId);
  const data = await getDoc(userDoc);
  const userData = await parseDocRef<User>(data, ["school"]);
  return userData;
};
