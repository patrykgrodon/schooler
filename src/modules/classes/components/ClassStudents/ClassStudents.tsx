import { ErrorView, Spinner } from "common/components";
import useClassStudents from "modules/classes/hooks/useClassStudents";
import { StudentsTable } from "modules/students/components";
import { Student } from "modules/students/types";

type ClassStudentsProps = {
  classId: string;
};

const ClassStudents = ({ classId }: ClassStudentsProps) => {
  const { isLoading, isError, classStudents } = useClassStudents(classId);

  if (isLoading) return <Spinner size="medium" />;
  if (isError) return <ErrorView />;

  return <StudentsTable students={classStudents as Student[]} />;
};

export default ClassStudents;
