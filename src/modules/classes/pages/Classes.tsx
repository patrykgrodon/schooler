import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { FormDialog, PageHeader, Spinner } from "common/components";
import useModal from "common/hooks/useModal";
import { useAuth } from "modules/auth/contexts/authContext";
import { getClasses } from "../api";
import { ClassesTable, ClassForm } from "../components";

const Classes = () => {
  const { user } = useAuth();

  const { isOpen, closeModal, openModal } = useModal();

  const displayAddClassBtn = user?.accountType === "admin";

  const {
    data: classes,
    refetch,
    isLoading,
  } = useQuery(["classes"], () => getClasses(user!.school.id));

  const onSuccess = (classId: string) => {
    closeModal();
    refetch();
  };

  return (
    <Box>
      <PageHeader
        onClick={openModal}
        textButton={displayAddClassBtn ? "Dodaj klasę" : undefined}
        textHeader="Klasy"
      />
      {isLoading ? (
        <Spinner size="medium" />
      ) : (
        <ClassesTable classes={classes || []} />
      )}
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
