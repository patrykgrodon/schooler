import { useQuery } from "@tanstack/react-query";
import { ErrorView, Spinner } from "common/components";
import { getClassSubjects } from "modules/subjects/api";
import ClassSubjectsTable from "./ClassSubjectsTable/ClassSubjectsTable";

type ClassSubjectsProps = {
  classId: string;
};

const ClassSubjects = ({ classId }: ClassSubjectsProps) => {
  const {
    data: classSubjects,
    isLoading,
    isError,
  } = useQuery(["class-subjects", classId], () => getClassSubjects(classId));

  if (isLoading) return <Spinner size="medium" />;
  if (isError) return <ErrorView />;

  return <ClassSubjectsTable classSubjects={classSubjects} />;
};

export default ClassSubjects;
