import { Box } from "@mui/material";
import { FormDialog, PageHeader } from "common/components";
import useModal from "common/hooks/useModal";
import { ClassForm, ClassesTable } from "../components";

const Classes = () => {
  const { isOpen, closeModal, openModal } = useModal();
  return (
    <Box>
      <PageHeader
        onClick={openModal}
        textButton="Dodaj klasę"
        textHeader="Klasy"
      />
      <ClassesTable />
      <FormDialog isOpen={isOpen} handleClose={closeModal} title="Dodaj klasę">
        <ClassForm />
      </FormDialog>
    </Box>
  );
};

export default Classes;
