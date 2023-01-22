const routes = {
  Base: "/",
  Login: "/login",
  RemindPassword: "/remind-password",
  Register: "/register",
  LessonPlan: "/lesson-plan",
  Grades: "/grades",
  Attendance: "/attendance",
  Messages: "/messages",
  Classes: "/classes",
  Students: "/students",
  Subjects: "/subjects",
  Teachers: "/teachers",
};

export default routes;

export type RouteValue = typeof routes[keyof typeof routes];
