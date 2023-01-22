import { FormDialog } from "common/components";
import StudentForm from "../StudentForm/StudentForm";

type StudentFormDialogProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const StudentFormDialog = ({ isOpen, handleClose }: StudentFormDialogProps) => {
  return (
    <FormDialog isOpen={isOpen} handleClose={handleClose} title="Dodaj ucznia">
      <StudentForm />
    </FormDialog>
  );
};

export default StudentFormDialog;
