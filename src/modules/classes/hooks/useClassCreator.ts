import { db } from "firebase-config";
import { addDoc, collection, doc } from "firebase/firestore";
import { useAuth } from "modules/auth/contexts/authContext";
import { CreateClass } from "../types";

const useClassCreator = () => {
  const { user } = useAuth();
  const createClass: CreateClass = async ({ classTeacher, name }) => {
    const createdClassRef = await addDoc(collection(db, "classes"), {
      name,
      classTeacher: doc(db, "users", classTeacher),
      school: user!.school,
      students: [],
    });

    return createdClassRef.id;
  };
  return { createClass };
};

export default useClassCreator;
