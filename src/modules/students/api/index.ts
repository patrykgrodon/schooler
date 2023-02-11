import { getSchoolFromRef } from "common/api";
import { db } from "firebase-config";
import { query, where, doc, collection, getDocs } from "firebase/firestore";
import { getClassFromRef } from "modules/classes/api";
import { parseGetDocs } from "utils/firebaseHelpers";
import { Student, StudentDoc } from "../types";

export const getClassStudents = async (classId: string) => {
  const q = query(
    collection(db, "users"),
    where("class", "==", doc(db, "classes", classId)),
    where("accountType", "==", "student")
  );
  const data = await getDocs(q);
  const parsedData = parseGetDocs<StudentDoc[]>(data);

  const students = await Promise.all(
    parsedData.map((data) => getStudentFromDoc(data, false))
  );

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
