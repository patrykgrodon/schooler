import { getSchoolFromRef } from "common/api";
import { DocRef } from "common/types";
import { getDoc } from "firebase/firestore";
import { getClassFromRef } from "modules/classes/api";
import { getSubjectFromRef } from "modules/subjects/api";
import { parseGetDoc } from "utils/firebaseHelpers";
import { Teacher, TeacherDoc } from "../types";

export const getTeacherFromRef = async (ref: DocRef) => {
  const doc = await getDoc(ref);
  const parsedFlat = parseGetDoc<TeacherDoc>(doc);
  const [school, subjects, teacherOfClass] = await Promise.all([
    getSchoolFromRef(parsedFlat.school),
    Promise.all(
      parsedFlat.subjects.map((subject) => getSubjectFromRef(subject))
    ),
    getClassFromRef(parsedFlat.teacherOfClass, false),
  ]);

  return { ...parsedFlat, school, subjects, teacherOfClass } as Teacher;
};
