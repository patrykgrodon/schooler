import { AccountType } from "common/types";
import routes from "routes/routePaths";

export const getCorrectNavigateRoute = (accountType: AccountType) => {
  switch (accountType) {
    case "admin":
      return routes.Classes;
    case "student":
      return routes.LessonPlan;
    case "teacher":
      return routes.LessonPlan;
  }
};
