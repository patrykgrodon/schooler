import { useQuery } from "@tanstack/react-query";
import { useAuth } from "modules/auth/contexts/authContext";
import { getSchoolClasses } from "../api";

const useSchoolClasses = () => {
  const { user } = useAuth();
  const {
    data: classes,
    isLoading,
    isError,
  } = useQuery(["classes", user?.school.id], () =>
    getSchoolClasses(user!.school.id)
  );
  return {
    classes,
    isLoading,
    isError,
  };
};

export default useSchoolClasses;
