import { TeachersTable } from "modules/teachers/components";

type ClassTeachersProps = {
  classId: string;
};

const ClassTeachers = ({ classId }: ClassTeachersProps) => {
  return <TeachersTable teachers={[]} />;
};

export default ClassTeachers;
