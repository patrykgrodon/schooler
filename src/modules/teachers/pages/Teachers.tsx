import { Box } from "@mui/material";
import { FormDialog, PageHeader } from "common/components";
import useModal from "common/hooks/useModal";
import { TeacherForm, TeachersTable } from "../components";

const Teachers = () => {
  const { isOpen, closeModal, openModal } = useModal();
  return (
    <Box>
      <PageHeader
        onClick={openModal}
        textButton="Dodaj nauczyciela"
        textHeader="Nauczyciele"
      />
      <TeachersTable />
      <FormDialog
        isOpen={isOpen}
        handleClose={closeModal}
        title="Dodaj nauczyciela">
        <TeacherForm />
      </FormDialog>
    </Box>
  );
};

export default Teachers;
