import { getSchoolFromRef } from "common/api";
import { DocRef } from "common/types";
import { db } from "firebase-config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { getClassStudents } from "modules/students/api";
import { getTeacherFromRef } from "modules/teachers/api";
import { parseGetDoc, parseGetDocs } from "utils/firebaseHelpers";
import { ClassDoc, ClassType } from "../types";

export const getClasses = async (schoolId: string) => {
  const q = query(
    collection(db, "classes"),
    where("school", "==", doc(db, "schools", schoolId))
  );
  const data = await getDocs(q);
  const parsedData = parseGetDocs<ClassDoc[]>(data);

  const classes = await Promise.all(
    parsedData.map((data) => getClassFromDoc(data, true))
  );
  return classes;
};

export function getClassFromRef<T extends boolean>(
  ref: DocRef,
  withClassTeacher: T
): T extends true
  ? Promise<ClassType>
  : Promise<Omit<ClassType, "classTeacher">>;
export async function getClassFromRef(
  ref: DocRef,
  withClassTeacher: boolean
): Promise<ClassType | Omit<ClassType, "classTeacher">> {
  const doc = await getDoc(ref);
  const { classTeacher: classTeacherRef, ...parsedFlat } =
    parseGetDoc<ClassDoc>(doc);
  const [school, students] = await Promise.all([
    getSchoolFromRef(parsedFlat.school),
    getClassStudents(doc.id),
  ]);
  const common = { ...parsedFlat, school, students };
  if (withClassTeacher) {
    const classTeacher = await getTeacherFromRef(classTeacherRef, true);
    return { ...common, classTeacher };
  }
  return common;
}

export function getClassFromDoc<T extends boolean>(
  doc: ClassDoc,
  withClassTeacher: T
): T extends true
  ? Promise<ClassType>
  : Promise<Omit<ClassType, "classTeacher">>;
export async function getClassFromDoc(
  doc: ClassDoc,
  withClassTeacher: boolean
) {
  const [school, students] = await Promise.all([
    getSchoolFromRef(doc.school),
    getClassStudents(doc.id),
  ]);
  const common = { ...doc, school, students };
  if (withClassTeacher) {
    const classTeacher = await getTeacherFromRef(doc.classTeacher, true);
    return { ...common, classTeacher };
  }
  return common;
}
