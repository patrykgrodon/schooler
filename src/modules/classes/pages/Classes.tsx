import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { ErrorView, FormDialog, PageHeader, Spinner } from "common/components";
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
    isError,
  } = useQuery(["classes", user?.school.id], () => getClasses(user!.school.id));

  const onSuccess = (classId: string) => {
    closeModal();
    refetch();
  };

  return (
    <Box sx={{ height: "100%" }}>
      <PageHeader
        onClick={openModal}
        textButton={displayAddClassBtn ? "Dodaj klasę" : undefined}
        textHeader="Klasy"
      />
      {isLoading ? <Spinner size="medium" /> : null}
      {isError && !isLoading ? <ErrorView /> : null}
      {!isError && !isLoading ? <ClassesTable classes={classes} /> : null}
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
