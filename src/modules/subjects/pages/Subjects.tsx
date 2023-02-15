import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { ErrorView, FormDialog, PageHeader, Spinner } from "common/components";
import useModal from "common/hooks/useModal";
import { useAuth } from "modules/auth/contexts/authContext";
import { getSchoolSubjects } from "../api";
import { SubjectForm, SubjectsTable } from "../components";

const Subjects = () => {
  const { isOpen, closeModal, openModal } = useModal();
  const { user } = useAuth();

  const {
    data: subjects,
    refetch,
    isLoading,
    isError,
  } = useQuery(["subjects", user?.school.id], () =>
    getSchoolSubjects(user!.school.id)
  );

  const onSuccess = () => {
    closeModal();
    refetch();
  };

  return (
    <Box>
      <PageHeader
        onClick={openModal}
        textButton="Dodaj przedmiot"
        textHeader="Przedmioty"
      />
      {isLoading ? <Spinner size="medium" /> : null}
      {isError && !isLoading ? <ErrorView /> : null}
      {!isError && !isLoading ? <SubjectsTable subjects={subjects} /> : null}

      <FormDialog
        isOpen={isOpen}
        handleClose={closeModal}
        title="Dodaj przedmiot">
        <SubjectForm onSuccess={onSuccess} />
      </FormDialog>
    </Box>
  );
};

export default Subjects;
