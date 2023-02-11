import { db } from "firebase-config";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useAuth } from "modules/auth/contexts/authContext";
import { CreateClass } from "../types";

const useClassCreator = () => {
  const { user } = useAuth();
  const createClass: CreateClass = async ({ classTeacher, name }) => {
    const teacherDoc = doc(db, "users", classTeacher);
    const createdClassRef = await addDoc(collection(db, "classes"), {
      name,
      classTeacher: teacherDoc,
      school: user!.school,
      students: [],
    });
    await updateDoc(teacherDoc, {
      class: doc(db, "classes", createdClassRef.id),
    });

    return createdClassRef.id;
  };
  return { createClass };
};

export default useClassCreator;
