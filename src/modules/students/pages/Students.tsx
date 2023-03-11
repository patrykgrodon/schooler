import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import {
  ConfirmationDialog,
  ErrorView,
  FormDialog,
  PageHeader,
  Spinner,
} from "common/components";
import useModal from "common/hooks/useModal";
import { useAuth } from "modules/auth/contexts/authContext";
import { useState } from "react";
import { generatePath } from "react-router-dom";
import routes from "routes/routePaths";
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

  const [successInfo, setSuccessInfo] = useState<{
    studentId: string;
    studentPw: string;
  } | null>(null);

  const openSuccess = (studentId: string, studentPw: string) =>
    setSuccessInfo({ studentId, studentPw });
  const closeSuccess = () => setSuccessInfo(null);

  const onSuccess = (studentId: string, password: string) => {
    closeModal();
    openSuccess(studentId, password);
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
      {successInfo ? (
        <ConfirmationDialog
          isLink
          handleClose={closeSuccess}
          mainButtonText="Przejdź do profilu"
          text={
            <>
              Hasło użytkownika: <strong>{successInfo.studentPw}</strong>
              <br /> Hasło jest widoczne tylko w tym momencie, jeśli hasło nie
              zostanie zapisane jedyna opcja przywrócenia dostępu do konta to
              zresetowania hasła do konta poprzez adres e-mail.
            </>
          }
          open
          path={generatePath(routes.Student, {
            studentId: successInfo.studentId,
          })}
          title="Dodano ucznia"
          type="success"
        />
      ) : null}
    </Box>
  );
};

export default Students;
