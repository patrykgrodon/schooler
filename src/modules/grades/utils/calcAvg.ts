export const calcAvg = (grades: number[]) => {
  return +(
    grades.reduce((acc, grade) => acc + grade, 0) / grades.length
  ).toFixed(2);
};
