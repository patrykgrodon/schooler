import { Box } from "@mui/material";
import { useAppSelector } from "app/hooks";
import { FormDialog, PageHeader } from "common/components";
import useModal from "common/hooks/useModal";
import { ClassForm, ClassesTable } from "../components";

const Classes = () => {
  const { user } = useAppSelector(({ auth }) => auth);

  const { isOpen, closeModal, openModal } = useModal();

  const displayAddClassBtn = user?.accountType === "admin";
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
          <ClassForm />
        </FormDialog>
      ) : null}
    </Box>
  );
};

export default Classes;
