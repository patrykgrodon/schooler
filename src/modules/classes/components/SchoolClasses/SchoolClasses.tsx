import { useQuery } from "@tanstack/react-query";
import { ErrorView, Spinner } from "common/components";
import { useAuth } from "modules/auth/contexts/authContext";
import { getSchoolClasses } from "modules/classes/api";
import ClassesTable from "../ClassesTable/ClassesTable";

const SchoolClasses = () => {
  const { user } = useAuth();
  const {
    data: classes,
    isLoading,
    isError,
  } = useQuery(["classes", user?.school.id], () =>
    getSchoolClasses(user!.school.id)
  );

  if (isLoading) return <Spinner size="medium" />;

  if (isError) return <ErrorView />;

  return <ClassesTable classes={classes} />;
};

export default SchoolClasses;
