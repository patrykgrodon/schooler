import { getSchoolFromRef } from "common/api";
import { DocRef } from "common/types";
import { db } from "firebase-config";
import {
  getDoc,
  query,
  collection,
  where,
  doc,
  getDocs,
} from "firebase/firestore";
import { getClassFromRef } from "modules/classes/api";
import { getSubjectFromRef } from "modules/subjects/api";
import { parseGetDoc, parseGetDocs } from "utils/firebaseHelpers";
import { Teacher, TeacherDoc } from "../types";

export const getTeachers = async (schoolId: string) => {
  const q = query(
    collection(db, "users"),
    where("school", "==", doc(db, "schools", schoolId)),
    where("accountType", "==", "teacher")
  );
  const data = await getDocs(q);
  const parsedData = parseGetDocs<TeacherDoc[]>(data);

  const teachers = await Promise.all(
    parsedData.map((data) => getTeacherFromDoc(data, true))
  );

  return teachers;
};

export function getTeacherFromDoc<T extends boolean>(
  teacherDoc: TeacherDoc,
  withSubjects: T
): T extends true ? Promise<Teacher> : Promise<Omit<Teacher, "subjects">>;
export async function getTeacherFromDoc(
  teacherDoc: TeacherDoc,
  withSubjects: boolean
) {
  const [school, teacherOfClass] = await Promise.all([
    getSchoolFromRef(teacherDoc.school),
    getClassFromRef(teacherDoc.teacherOfClass, false),
  ]);
  if (withSubjects) {
    const subjects = await Promise.all(
      teacherDoc.subjects.map((subject) => getSubjectFromRef(subject, false))
    );
    return { ...teacherDoc, school, subjects, teacherOfClass } as Teacher;
  }
  const { subjects, ...restTeacherDoc } = teacherDoc;
  return { ...restTeacherDoc, school, teacherOfClass } as Omit<
    Teacher,
    "subjects"
  >;
}
export function getTeacherFromRef<T extends boolean>(
  ref: DocRef,
  withSubjects: T
): T extends true ? Promise<Teacher> : Promise<Omit<Teacher, "subjects">>;
export async function getTeacherFromRef(ref: DocRef, withSubjects: boolean) {
  const doc = await getDoc(ref);
  const teacherDoc = parseGetDoc<TeacherDoc>(doc);
  const teacher = await getTeacherFromDoc(teacherDoc, withSubjects);
  return teacher;
}
