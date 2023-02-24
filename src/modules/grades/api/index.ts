import { db } from "firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { getSubjectFromRef } from "modules/subjects/api";
import { parseGetDoc } from "utils/firebaseHelpers";
import { StudentGrade, StudentGradeDoc } from "../types";

export const getStudentGrades = async (studentId: string) => {
  const data = await getDoc(doc(db, "grades", studentId));
  const { subjects } = parseGetDoc<{ subjects: StudentGradeDoc[] }>(data);

  const studentGrades = await Promise.all(
    subjects.map((doc) => getStudentGradesFromDoc(doc))
  );

  return studentGrades;
};

export const getStudentGradesFromDoc = async (doc: StudentGradeDoc) => {
  const subject = await getSubjectFromRef(doc.subject, false);

  return { ...doc, subject } as StudentGrade;
};
