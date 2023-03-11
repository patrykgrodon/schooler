import { ErrorView, Spinner } from "common/components";
import useSchoolClasses from "modules/classes/hooks/useSchoolClasses";
import ClassesTable from "../ClassesTable/ClassesTable";

const SchoolClasses = () => {
  const { classes, isError, isLoading } = useSchoolClasses();
  if (isLoading) return <Spinner size="medium" />;

  if (isError) return <ErrorView />;

  return <ClassesTable classes={classes || []} />;
};

export default SchoolClasses;
