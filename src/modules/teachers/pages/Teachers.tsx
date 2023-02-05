import { Box } from "@mui/material";
import { FormDialog, PageHeader } from "common/components";
import useModal from "common/hooks/useModal";
import { TeacherForm, TeachersTable } from "../components";

const Teachers = () => {
  const { isOpen, closeModal, openModal } = useModal();

  const handleSuccess = (password: string, teacherId: string) => {
    closeModal();
  };

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
        <TeacherForm onSuccess={handleSuccess} />
      </FormDialog>
    </Box>
  );
};

export default Teachers;
