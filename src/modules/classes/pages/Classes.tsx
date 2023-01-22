import { Box } from "@mui/material";
import { PageHeader } from "common/components";
import useModal from "common/hooks/useModal";
import ClassesTable from "../components/ClassesTable/ClassesTable";
import ClassFormDialog from "../components/ClassFormDialog/ClassFormDialog";

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
      <ClassFormDialog isOpen={isOpen} handleClose={closeModal} />
    </Box>
  );
};

export default Classes;
