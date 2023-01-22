import { Box } from "@mui/material";
import { FormDialog, PageHeader } from "common/components";
import useModal from "common/hooks/useModal";
import { SubjectForm, SubjectsTable } from "../components";

const Subjects = () => {
  const { isOpen, closeModal, openModal } = useModal();
  return (
    <Box>
      <PageHeader
        onClick={openModal}
        textButton="Dodaj przedmiot"
        textHeader="Przedmioty"
      />
      <SubjectsTable />
      <FormDialog
        isOpen={isOpen}
        handleClose={closeModal}
        title="Dodaj przedmiot">
        <SubjectForm />
      </FormDialog>
    </Box>
  );
};

export default Subjects;
