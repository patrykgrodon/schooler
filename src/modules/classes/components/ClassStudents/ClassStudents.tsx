import { useQuery } from "@tanstack/react-query";
import { ErrorView, Spinner } from "common/components";
import { getClassStudents } from "modules/students/api";
import { StudentsTable } from "modules/students/components";
import { Student } from "modules/students/types";

type ClassStudentsProps = {
  classId: string;
};

const ClassStudents = ({ classId }: ClassStudentsProps) => {
  const {
    data: classStudents,
    isLoading,
    isError,
  } = useQuery(["class-students", classId], () => getClassStudents(classId));

  if (isLoading) return <Spinner size="medium" />;
  if (isError) return <ErrorView />;

  return <StudentsTable students={classStudents as Student[]} />;
};

export default ClassStudents;
