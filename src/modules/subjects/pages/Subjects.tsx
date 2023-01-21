import { Box } from "@mui/material";
import { PageHeader } from "common/components";
import SubjectsTable from "../components/SubjectsTable";

const Subjects = () => {
  return (
    <Box>
      <PageHeader
        onClick={() => {}}
        textButton="Dodaj przedmiot"
        textHeader="Przedmioty"
      />
      <SubjectsTable />
    </Box>
  );
};

export default Subjects;
