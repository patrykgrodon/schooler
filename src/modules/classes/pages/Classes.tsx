import { Box } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { FormDialog, PageHeader } from "common/components";
import useModal from "common/hooks/useModal";
import { useAuth } from "modules/auth/contexts/authContext";
import { ClassForm, SchoolClasses, TeacherClasses } from "../components";

const Classes = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { isOpen, closeModal, openModal } = useModal();

  const isAdmin = user?.accountType === "admin";

  const onSuccess = (classId: string) => {
    closeModal();
    queryClient.invalidateQueries(["classes", user?.school.id]);
  };

  return (
    <Box>
      <PageHeader
        onClick={openModal}
        textButton={isAdmin ? "Dodaj klasę" : undefined}
        textHeader="Klasy"
      />
      {isAdmin ? <SchoolClasses /> : <TeacherClasses />}

      {isAdmin ? (
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
