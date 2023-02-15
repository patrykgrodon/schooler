import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { ErrorView, FormDialog, PageHeader, Spinner } from "common/components";
import useModal from "common/hooks/useModal";
import { useAuth } from "modules/auth/contexts/authContext";
import { getSchoolStudents } from "../api";
import { StudentForm, StudentsTable } from "../components";

const Students = () => {
  const { isOpen, closeModal, openModal } = useModal();
  const { user } = useAuth();
  const {
    data: students,
    refetch,
    isLoading,
    isError,
  } = useQuery(["students", user?.school.id], () =>
    getSchoolStudents(user!.school.id)
  );

  const onSuccess = (password: string, studentId: string) => {
    closeModal();
    refetch();
  };
  return (
    <Box>
      <PageHeader
        onClick={openModal}
        textButton="Dodaj ucznia"
        textHeader="Uczniowie"
      />
      {isLoading ? <Spinner size="medium" /> : null}
      {isError && !isLoading ? <ErrorView /> : null}
      {!isError && !isLoading ? <StudentsTable students={students} /> : null}

      <FormDialog isOpen={isOpen} handleClose={closeModal} title="Dodaj ucznia">
        <StudentForm onSuccess={onSuccess} />
      </FormDialog>
    </Box>
  );
};

export default Students;
