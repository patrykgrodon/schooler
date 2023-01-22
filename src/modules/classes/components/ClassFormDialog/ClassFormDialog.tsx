import { FormDialog } from "common/components";
import ClassForm from "../ClassForm/ClassForm";

type ClassFormDialogProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const ClassFormDialog = ({ isOpen, handleClose }: ClassFormDialogProps) => {
  return (
    <FormDialog isOpen={isOpen} handleClose={handleClose} title="Dodaj klasę">
      <ClassForm />
    </FormDialog>
  );
};

export default ClassFormDialog;
