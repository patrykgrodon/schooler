import { AccountType } from "common/types";
import { db, secondaryAuth } from "firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "modules/auth/contexts/authContext";
import { CreateTeacher } from "modules/auth/types";
import { generatePassword } from "utils/generatePassword";
import { doc, setDoc } from "firebase/firestore";

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
      schoolId: user!.schoolId,
      firstName,
      lastName,
      subjects: subjects.map((subjectId) => doc(db, "subjects", subjectId)),
    });

    return { password, teacherId: uid };
  };
  return { createTeacher };
};

export default useTeacherCreator;
