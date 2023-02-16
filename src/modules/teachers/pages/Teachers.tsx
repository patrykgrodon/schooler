import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { ErrorView, FormDialog, PageHeader, Spinner } from "common/components";
import useModal from "common/hooks/useModal";
import { useAuth } from "modules/auth/contexts/authContext";
import { getTeachers } from "../api";
import { TeacherForm, TeachersTable } from "../components";

const Teachers = () => {
  const { isOpen, closeModal, openModal } = useModal();

  const { user } = useAuth();
  const {
    data: teachers,
    refetch,
    isLoading,
    isError,
  } = useQuery(["teachers", user?.school.id], () =>
    getTeachers(user!.school.id)
  );

  const handleSuccess = (password: string, teacherId: string) => {
    closeModal();
    refetch();
  };

  return (
    <Box>
      <PageHeader
        onClick={openModal}
        textButton="Dodaj nauczyciela"
        textHeader="Nauczyciele"
      />
      {isLoading ? <Spinner size="medium" /> : null}
      {isError && !isLoading ? <ErrorView /> : null}
      {!isError && !isLoading ? <TeachersTable teachers={teachers} /> : null}

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
