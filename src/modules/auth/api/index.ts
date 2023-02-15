import { doc, getDoc } from "@firebase/firestore";
import { getSchoolFromRef } from "common/api";
import { User, UserDoc } from "common/types";
import { db } from "firebase-config";
import { getClassFromRef } from "modules/classes/api";
import { getSubjectFromRef } from "modules/subjects/api";
import { parseGetDoc } from "utils/firebaseHelpers";

export const getUserData = async (userId: string) => {
  const userRef = doc(db, "users", userId);
  const userDoc = await getDoc(userRef);
  const parsedData = parseGetDoc<UserDoc>(userDoc);
  const school = await getSchoolFromRef(parsedData.school);
  if (parsedData.accountType === "admin") {
    return { ...parsedData, school } as User;
  }
  if (parsedData.accountType === "teacher") {
    const subjects = await Promise.all(
      parsedData.subjects.map((subject) => getSubjectFromRef(subject, false))
    );
    const teacherOfClass = await getClassFromRef(
      parsedData.teacherOfClass,
      false
    );
    return { ...parsedData, school, subjects, teacherOfClass } as User;
  }
  const classVal = await getClassFromRef(parsedData.class, true);
  return { ...parsedData, school, class: classVal } as User;
};
