import { useQuery } from "@tanstack/react-query";
import { getClassSubjects } from "modules/subjects/api";
import { getStudentGrades } from "../api";

const useStudentGrades = (
  studentId: string | undefined,
  classId: string | undefined
) => {
  const {
    data: studentGrades,
    isError: isGradesError,
    isLoading: isGradesLoading,
  } = useQuery(["grades", studentId], () => getStudentGrades(studentId!), {
    enabled: !!studentId,
  });

  const {
    data: classSubjects,
    isLoading: isClassSubjectsLoading,
    isError: isClassSubjectsError,
  } = useQuery(["class-subjects", classId], () => getClassSubjects(classId!), {
    enabled: !!classId,
  });

  const grades =
    classSubjects?.map(({ subject }) => {
      const defaultValues = {
        subject,
        midYearGrade: 0,
        finalGrade: 0,
        firstTerm: [],
        secondTerm: [],
      };
      return (
        studentGrades?.find(({ subject: { id } }) => id === subject.id) ||
        defaultValues
      );
    }) || [];

  const isError = isGradesError || isClassSubjectsError;
  const isLoading = isGradesLoading || isClassSubjectsLoading;
  return { isError, isLoading, grades };
};

export default useStudentGrades;
