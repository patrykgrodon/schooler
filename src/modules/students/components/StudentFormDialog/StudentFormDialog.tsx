import { CloseOutlined } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import StudentForm from "../StudentForm/StudentForm";

type StudentFormDialogProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const StudentFormDialog = ({ isOpen, handleClose }: StudentFormDialogProps) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Dodaj ucznia</DialogTitle>
      <IconButton
        onClick={handleClose}
        sx={{ position: "absolute", top: 10, right: 10 }}>
        <CloseOutlined />
      </IconButton>
      <DialogContent sx={{ pt: 0 }}>
        <Box sx={{ pt: 1 }}>
          <StudentForm />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default StudentFormDialog;
