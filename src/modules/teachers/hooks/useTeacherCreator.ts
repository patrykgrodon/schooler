import { AccountType } from "common/types";
import { db, secondaryAuth } from "firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "modules/auth/contexts/authContext";
import { generatePassword } from "utils/generatePassword";
import { doc, setDoc } from "firebase/firestore";
import { CreateTeacher } from "../types";

const useTeacherCreator = () => {
  const { user } = useAuth();
  const createTeacher: CreateTeacher = async ({
    email,
    firstName,
    lastName,
    subjects,
  }) => {
    const password = generatePassword();
    const {
      user: { uid },
    } = await createUserWithEmailAndPassword(secondaryAuth, email, password);
    const userDocRef = doc(db, "users", uid);
    const accountType: AccountType = "teacher";
    await setDoc(userDocRef, {
      email,
      accountType,
      school: user!.school,
      firstName,
      lastName,
      subjects: subjects.map((subjectId) => doc(db, "subjects", subjectId)),
    });

    return { password, teacherId: uid };
  };
  return { createTeacher };
};

export default useTeacherCreator;
