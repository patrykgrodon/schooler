import { useParams } from "react-router-dom";

const Class = () => {
  const params = useParams<{ classId: string }>();
  return <div>{params.classId}</div>;
};

export default Class;
