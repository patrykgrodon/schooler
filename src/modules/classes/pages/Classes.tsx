import { Box } from "@mui/material";
import { PageHeader } from "common/components";
import ClassesTable from "../components/ClassesTable/ClassesTable";

const Classes = () => {
  return (
    <Box>
      <PageHeader
        onClick={() => {}}
        textButton="Dodaj klasę"
        textHeader="Klasy"
      />
      <ClassesTable />
    </Box>
  );
};

export default Classes;
