import { Box } from "@mui/material";
import { FormDialog, PageHeader } from "common/components";
import useModal from "common/hooks/useModal";
import { StudentForm, StudentsTable } from "../components";

const Students = () => {
  const { isOpen, closeModal, openModal } = useModal();
  const onSuccess = (password: string, studentId: string) => {
    closeModal();
  };
  return (
    <Box>
      <PageHeader
        onClick={openModal}
        textButton="Dodaj ucznia"
        textHeader="Uczniowie"
      />
      <StudentsTable />
      <FormDialog isOpen={isOpen} handleClose={closeModal} title="Dodaj ucznia">
        <StudentForm onSuccess={onSuccess} />
      </FormDialog>
    </Box>
  );
};

export default Students;
