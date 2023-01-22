import { Box } from "@mui/material";
import { PageHeader } from "common/components";
import TeachersTable from "../components/TeachersTable/TeachersTable";

const Teachers = () => {
  return (
    <Box>
      <PageHeader
        onClick={() => {}}
        textButton="Dodaj nauczyciela"
        textHeader="Nauczyciele"
      />
      <TeachersTable />
    </Box>
  );
};

export default Teachers;
