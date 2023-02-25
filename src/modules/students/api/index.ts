import { getSchoolFromRef } from "common/api";
import { db } from "firebase-config";
import {
  query,
  where,
  doc,
  collection,
  getDocs,
  Query,
  DocumentData,
  getDoc,
} from "firebase/firestore";
import { getClassFromRef } from "modules/classes/api";
import { parseGetDoc, parseGetDocs } from "utils/firebaseHelpers";
import { Student, StudentDoc } from "../types";

function getStudents<T extends boolean>(
  query: Query<DocumentData>,
  withClass: T
): T extends true ? Promise<Student[]> : Promise<Omit<Student, "class">[]>;
async function getStudents(query: Query<DocumentData>, withClass: boolean) {
  const data = await getDocs(query);
  const parsedData = parseGetDocs<StudentDoc[]>(data);

  const students = await Promise.all(
    parsedData.map((data) => getStudentFromDoc(data, withClass))
  );

  return students;
}

export const getStudent = async (studentId: string) => {
  const data = await getDoc(doc(db, "users", studentId));
  const parsedData = parseGetDoc<StudentDoc>(data);
  const student = await getStudentFromDoc(parsedData, true);
  return student;
};

export const getSchoolStudents = async (schoolId: string) => {
  const q = query(
    collection(db, "users"),
    where("school", "==", doc(db, "schools", schoolId)),
    where("accountType", "==", "student")
  );
  const students = await getStudents(q, true);
  return students;
};

export const getClassStudents = async (classId: string) => {
  const q = query(
    collection(db, "users"),
    where("class", "==", doc(db, "classes", classId)),
    where("accountType", "==", "student")
  );
  const students = await getStudents(q, false);
  return students;
};

export function getStudentFromDoc<T extends boolean>(
  doc: StudentDoc,
  withClass: T
): T extends true ? Promise<Student> : Promise<Omit<Student, "class">>;
export async function getStudentFromDoc(
  doc: StudentDoc,
  withClass: boolean
): Promise<Student | Omit<Student, "class">> {
  if (withClass) {
    const [school, classVal] = await Promise.all([
      getSchoolFromRef(doc.school),
      getClassFromRef(doc.class, true),
    ]);
    return { ...doc, school, class: classVal } as Student;
  } else {
    const school = await getSchoolFromRef(doc.school);
    const { class: classRef, ...restDoc } = doc;
    return { ...restDoc, school } as Omit<Student, "class">;
  }
}
