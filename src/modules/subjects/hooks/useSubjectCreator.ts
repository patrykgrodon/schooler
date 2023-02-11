import { useAuth } from "modules/auth/contexts/authContext";
import { CreateSubject } from "../types";
import {
  doc,
  addDoc,
  updateDoc,
  arrayUnion,
  collection,
} from "firebase/firestore";
import { db } from "firebase-config";

const useSubjectCreator = () => {
  const { user } = useAuth();

  const createSubject: CreateSubject = async ({ name, teachers }) => {
    const teacherDocs = teachers.map((teacherId) =>
      doc(db, "users", teacherId)
    );
    const createdSubject = await addDoc(collection(db, "subjects"), {
      school: user!.school,
      name,
    });
    teacherDocs.forEach(async (teacherDoc) => {
      await updateDoc(teacherDoc, { subjects: arrayUnion(createdSubject) });
    });
  };

  return { createSubject };
};

export default useSubjectCreator;
