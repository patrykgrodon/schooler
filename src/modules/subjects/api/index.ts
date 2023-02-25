import { getSchoolFromRef } from "common/api";
import { DocRef } from "common/types";
import { db } from "firebase-config";
import {
  collection,
  getDoc,
  query,
  where,
  doc,
  getDocs,
} from "firebase/firestore";
import { getTeacherFromDoc, getTeacherFromRef } from "modules/teachers/api";
import { TeacherDoc } from "modules/teachers/types";
import { parseGetDoc, parseGetDocs } from "utils/firebaseHelpers";
import { ClassSubject, Subject, SubjectDoc } from "../types";

export const getSchoolSubjects = async (schoolId: string) => {
  const q = query(
    collection(db, "subjects"),
    where("school", "==", doc(db, "schools", schoolId))
  );
  const data = await getDocs(q);
  const parsedData = parseGetDocs<SubjectDoc[]>(data);

  const subjects = await Promise.all(
    parsedData.map((data) => getSubjectFromDoc(data, true))
  );

  return subjects;
};

export function getSubjectFromDoc<T extends boolean>(
  subjectDoc: SubjectDoc,
  withTeachers: T
): T extends true ? Promise<Subject> : Promise<Omit<Subject, "teachers">>;
export async function getSubjectFromDoc(
  subjectDoc: SubjectDoc,
  withTeachers: boolean
) {
  const school = await getSchoolFromRef(subjectDoc.school);

  if (withTeachers) {
    const q = query(
      collection(db, "users"),
      where("accountType", "==", "teacher"),
      where("subjects", "array-contains", doc(db, "subjects", subjectDoc.id))
    );

    const data = await getDocs(q);
    const teachersDocs = parseGetDocs<TeacherDoc[]>(data);
    const teachers = await Promise.all(
      teachersDocs.map((teacherDoc) => getTeacherFromDoc(teacherDoc, false))
    );

    return { ...subjectDoc, school, teachers } as Subject;
  }
  const { teachers, ...restSubjectDoc } = subjectDoc;
  return { ...restSubjectDoc, school } as Omit<Subject, "teachers">;
}

export function getSubjectFromRef<T extends boolean>(
  ref: DocRef,
  withTeachers: T
): T extends true ? Promise<Subject> : Promise<Omit<Subject, "teachers">>;
export async function getSubjectFromRef(ref: DocRef, withTeachers: boolean) {
  const doc = await getDoc(ref);
  const subjectDoc = parseGetDoc<SubjectDoc>(doc);
  const subject = await getSubjectFromDoc(subjectDoc, withTeachers);

  return subject;
}

export const getClassSubjects = async (classId: string) => {
  const data = await getDoc(doc(db, "classSubjects", classId));
  const { subjects } = parseGetDoc<{
    subjects: { teacher: DocRef; subject: DocRef }[];
  }>(data);
  const getSubject = async (el: { subject: DocRef; teacher: DocRef }) => {
    const subject = await getSubjectFromRef(el.subject, false);
    const teacher = await getTeacherFromRef(el.teacher, false);
    return { subject, teacher } as ClassSubject;
  };
  return await Promise.all(subjects.map((el) => getSubject(el)));
};
