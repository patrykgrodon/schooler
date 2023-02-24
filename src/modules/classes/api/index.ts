import { getSchoolFromRef } from "common/api";
import { DocRef } from "common/types";
import { db } from "firebase-config";
import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  Query,
  query,
  where,
} from "firebase/firestore";
import { getClassStudents } from "modules/students/api";
import { getTeacherFromRef } from "modules/teachers/api";
import { parseGetDoc, parseGetDocs } from "utils/firebaseHelpers";
import { ClassDoc, ClassType } from "../types";

const getClasses = async (query: Query<DocumentData>) => {
  const data = await getDocs(query);
  const parsedData = parseGetDocs<ClassDoc[]>(data);

  const classes = await Promise.all(
    parsedData.map((data) => getClassFromDoc(data, true))
  );
  return classes;
};

export const getTeacherClasses = async (teacherId: string) => {
  const q1 = query(
    collection(db, "classes"),
    where("classTeacher", "==", doc(db, "users", teacherId))
  );
  const q2 = query(
    collection(db, "classes"),
    where("subjects.teacherId", "==", teacherId)
  );

  const classes1 = await getClasses(q1);
  const classes2 = await getClasses(q2);
  const classesWithoutDuplicates = classes1
    .concat(classes2)
    .reduce(
      (acc, classObj) =>
        !!acc.find((el) => el.id === classObj.id) ? acc : [...acc, classObj],
      [] as ClassType[]
    );
  return classesWithoutDuplicates;
};

export const getSchoolClasses = async (schoolId: string) => {
  const q = query(
    collection(db, "classes"),
    where("school", "==", doc(db, "schools", schoolId))
  );
  const classes = await getClasses(q);
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
  const classDoc = parseGetDoc<ClassDoc>(doc);
  return await getClassFromDoc(classDoc, withClassTeacher);
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
