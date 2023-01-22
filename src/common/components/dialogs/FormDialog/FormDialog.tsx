import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import CloseButton from "../CloseButton/CloseButton";

type FormDialogProps = {
  isOpen: boolean;
  handleClose: () => void;
  title: string;
  children: React.ReactNode;
};

const FormDialog = ({
  isOpen,
  handleClose,
  children,
  title,
}: FormDialogProps) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <CloseButton onClick={handleClose} />
      <DialogContent sx={{ pt: 0 }}>
        <Box sx={{ pt: 1 }}>{children}</Box>
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;
