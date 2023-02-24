import { doc, getDoc } from "@firebase/firestore";
import { getSchoolFromRef } from "common/api";
import { User, UserDoc } from "common/types";
import { db } from "firebase-config";
import { getStudentFromDoc } from "modules/students/api";
import { getTeacherFromDoc } from "modules/teachers/api";
import { parseGetDoc } from "utils/firebaseHelpers";

export const getUserData = async (userId: string) => {
  const userRef = doc(db, "users", userId);
  const userDoc = await getDoc(userRef);
  const parsedData = parseGetDoc<UserDoc>(userDoc);
  if (parsedData.accountType === "admin") {
    const school = await getSchoolFromRef(parsedData.school);
    return { ...parsedData, school } as User;
  }
  if (parsedData.accountType === "teacher") {
    const teacher = await getTeacherFromDoc(parsedData, true);
    return teacher as User;
  }
  const student = await getStudentFromDoc(parsedData, true);
  return student as User;
};
