import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { CloseButton } from "common/components";
import StudentForm from "../StudentForm/StudentForm";

type StudentFormDialogProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const StudentFormDialog = ({ isOpen, handleClose }: StudentFormDialogProps) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Dodaj ucznia</DialogTitle>
      <CloseButton onClick={handleClose} />
      <DialogContent sx={{ pt: 0 }}>
        <Box sx={{ pt: 1 }}>
          <StudentForm />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default StudentFormDialog;
