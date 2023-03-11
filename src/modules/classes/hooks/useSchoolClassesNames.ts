import { useQuery } from "@tanstack/react-query";
import { useAuth } from "modules/auth/contexts/authContext";
import { getSchoolClassesNames } from "../api";

const useSchoolClassesNames = () => {
  const { user } = useAuth();
  const { data: classesNames } = useQuery(
    ["classes-names", user?.school.id],
    () => getSchoolClassesNames(user!.school.id)
  );
  return {
    classesNames,
  };
};

export default useSchoolClassesNames;
