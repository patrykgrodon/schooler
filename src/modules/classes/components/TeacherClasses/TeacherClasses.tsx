import { useQuery } from "@tanstack/react-query";
import { ErrorView, Spinner } from "common/components";
import { useAuth } from "modules/auth/contexts/authContext";
import { getTeacherClasses } from "modules/classes/api";
import ClassesTable from "../ClassesTable/ClassesTable";

const TeacherClasses = () => {
  const { user } = useAuth();
  const {
    data: classes,
    isLoading,
    isError,
  } = useQuery(["classes", user?.id], () => getTeacherClasses(user!.id));

  if (isLoading) return <Spinner size="medium" />;

  if (isError) return <ErrorView />;

  return <ClassesTable classes={classes} />;
};

export default TeacherClasses;
