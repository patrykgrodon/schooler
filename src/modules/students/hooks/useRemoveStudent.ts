import { useQueryClient } from "@tanstack/react-query";
import { db } from "firebase-config";
import { deleteDoc, doc } from "firebase/firestore";
import { useAuth } from "modules/auth/contexts/authContext";
import { useState } from "react";

const useRemoveStudent = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  const removeStudent = async (studentId: string) => {
    setIsLoading(true);
    try {
      deleteDoc(doc(db, "users", studentId));
      deleteDoc(doc(db, "grades", studentId));
      queryClient.invalidateQueries(["students", user?.school.id]);
    } catch (err: any) {}
    setIsLoading(false);
  };
  return { removeStudent, isLoading };
};

export default useRemoveStudent;
