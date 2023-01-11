import { lessonPlan } from "../constants";

export const getAllSubjects = () => {
  const keys = Object.keys(lessonPlan) as (keyof typeof lessonPlan)[];
  const subjects: string[] = [];
  keys.forEach((key) => {
    lessonPlan[key].forEach((subject) => {
      if (subjects.includes(subject) || subject === "") return;
      subjects.push(subject);
    });
  });

  return subjects.sort((a, b) => a.localeCompare(b));
};
