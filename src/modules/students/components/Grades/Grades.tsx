import { ErrorView, Spinner } from "common/components";
import { GradesTable } from "modules/grades/components";
import useStudentGrades from "modules/grades/hooks/useStudentGrades";

type GradesProps = {
  studentId: string;
  classId: string;
};

const Grades = ({ studentId, classId }: GradesProps) => {
  const { grades, isError, isLoading } = useStudentGrades(studentId, classId);

  if (isLoading) return <Spinner size="medium" />;
  if (isError) return <ErrorView />;

  return <GradesTable grades={grades} />;
};

export default Grades;
