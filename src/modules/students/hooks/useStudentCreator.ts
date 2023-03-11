import { AccountType } from "common/types";
import { db, secondaryAuth } from "firebase-config";
import { createUserWithEmailAndPassword, deleteUser } from "firebase/auth";
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
    const { user: addedUser } = await createUserWithEmailAndPassword(
      secondaryAuth,
      email,
      password
    );

    const userDocRef = doc(db, "users", addedUser.uid);
    const accountType: AccountType = "student";
    await setDoc(userDocRef, {
      email,
      accountType,
      school: doc(db, "schools", user!.school.id),
      firstName,
      lastName,
      ...(assignedToClass
        ? { class: doc(db, "classes", assignedToClass) }
        : {}),
    }).catch(() => deleteUser(addedUser));

    return { password, studentId: addedUser.uid };
  };
  return { createStudent };
};

export default useStudentCreator;
