import { Box } from "@mui/material";
import { FormDialog, PageHeader } from "common/components";
import useModal from "common/hooks/useModal";
import { useAuth } from "modules/auth/contexts/authContext";
import { ClassForm, ClassesTable } from "../components";

const Classes = () => {
  const { user } = useAuth();

  const { isOpen, closeModal, openModal } = useModal();

  const displayAddClassBtn = user?.accountType === "admin";

  const onSuccess = (classId: string) => {
    closeModal();
  };

  return (
    <Box>
      <PageHeader
        onClick={openModal}
        textButton={displayAddClassBtn ? "Dodaj klasę" : undefined}
        textHeader="Klasy"
      />
      <ClassesTable />
      {displayAddClassBtn ? (
        <FormDialog
          isOpen={isOpen}
          handleClose={closeModal}
          title="Dodaj klasę">
          <ClassForm onSuccess={onSuccess} />
        </FormDialog>
      ) : null}
    </Box>
  );
};

export default Classes;
