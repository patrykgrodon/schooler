import { Box } from "@mui/material";
import { PageHeader } from "common/components";
import StudentsTable from "../components/StudentsTable";

const Students = () => {
  return (
    <Box>
      <PageHeader
        onClick={() => {}}
        textButton="Dodaj ucznia"
        textHeader="Uczniowie"
      />
      <StudentsTable />
    </Box>
  );
};

export default Students;
