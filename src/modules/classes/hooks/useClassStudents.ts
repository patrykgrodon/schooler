import { useQuery } from "@tanstack/react-query";
import { getClassStudents } from "modules/students/api";

const useClassStudents = (classId: string) => {
  const {
    data: classStudents,
    isLoading,
    isError,
  } = useQuery(["class-students", classId], () => getClassStudents(classId));
  return { classStudents, isLoading, isError };
};

export default useClassStudents;
