import { Box } from "@mui/material";
import { PageHeader } from "common/components";
import useModal from "common/hooks/useModal";
import StudentFormDialog from "../components/StudentFormDialog/StudentFormDialog";
import StudentsTable from "../components/StudentsTable/StudentsTable";

const Students = () => {
  const { isOpen, closeModal, openModal } = useModal();
  return (
    <Box>
      <PageHeader
        onClick={openModal}
        textButton="Dodaj ucznia"
        textHeader="Uczniowie"
      />
      <StudentsTable />
      <StudentFormDialog isOpen={isOpen} handleClose={closeModal} />
    </Box>
  );
};

export default Students;
