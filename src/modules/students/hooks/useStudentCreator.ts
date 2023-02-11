import { AccountType } from "common/types";
import { db, secondaryAuth } from "firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "modules/auth/contexts/authContext";
import { generatePassword } from "utils/generatePassword";
import { doc, setDoc } from "firebase/firestore";
import { CreateStudent } from "../types";

const useStudentCreator = () => {
  const { user } = useAuth();
  const createStudent: CreateStudent = async ({
    email,
    firstName,
    lastName,
    assignedToClass,
  }) => {
    const password = generatePassword();
    const {
      user: { uid },
    } = await createUserWithEmailAndPassword(secondaryAuth, email, password);

    const userDocRef = doc(db, "users", uid);
    const classDocRef = doc(db, "classes", assignedToClass);
    const accountType: AccountType = "student";
    await setDoc(userDocRef, {
      email,
      accountType,
      school: user!.school,
      firstName,
      lastName,
      ...(assignedToClass ? { class: classDocRef } : {}),
    });

    return { password, studentId: uid };
  };
  return { createStudent };
};

export default useStudentCreator;
