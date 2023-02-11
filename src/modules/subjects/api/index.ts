import { getSchoolFromRef } from "common/api";
import { DocRef } from "common/types";
import { getDoc } from "firebase/firestore";
import { parseGetDoc } from "utils/firebaseHelpers";
import { Subject, SubjectDoc } from "../types";

export const getSubjectFromRef = async (ref: DocRef) => {
  const doc = await getDoc(ref);
  const parsedFlat = parseGetDoc<SubjectDoc>(doc);
  const school = await getSchoolFromRef(parsedFlat.school);
  return { ...parsedFlat, school } as Subject;
};
