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
  Class: "/classes/:classId",
  ClassStudents: "/classes/:classId/students",
  ClassTeachers: "/classes/:classId/teachers",
  ClassLessonPlan: "/classes/:classId/lesson-plan",
  Students: "/students",
  Student: "/students/:studentId",
  StudentGrades: "/students/:studentId/grades",
  StudentAttendance: "/students/:studentId/attendance",
  Subjects: "/subjects",
  Teachers: "/teachers",
} as const;

export default routes;

export type RouteValue = typeof routes[keyof typeof routes];
