import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Check, Warning } from "@mui/icons-material";
import { RequestButton, CloseButton } from "common/components";
import { Link } from "react-router-dom";
import { sx } from "./styles";

type CommonProps = {
  type: "error" | "success";
  open: boolean;
  title: string;
  mainButtonText: string;
  text?: string;
  oneAction?: boolean;
  isLoading?: boolean;
  buttonIcon?: any;
  closeButtonText?: string;
  handleClose: () => void;
  SecondButton?: JSX.Element;
};

type PropsAsLink = CommonProps & {
  isLink: true;
  path: string;
};

type PropsAsButton = CommonProps & {
  isLink?: false;
  handleClick: () => any;
};

const ConfirmationDialog = ({
  open,
  title,
  text,
  type,
  mainButtonText,
  closeButtonText = "Zamknij",
  isLoading = false,
  buttonIcon: ButtonIcon,
  oneAction = false,
  handleClose,
  SecondButton,
  ...props
}: PropsAsLink | PropsAsButton) => {
  const MainAction = () => {
    const commonProps = {
      fullWidth: true,
      startIcon: ButtonIcon && <ButtonIcon />,
      sx: type === "error" ? sx.errorButton : sx.successButton,
    };

    if (props.isLink) {
      return (
        <Button component={Link} to={props.path} {...commonProps}>
          {mainButtonText}
        </Button>
      );
    }
    return (
      <RequestButton
        onClick={props.handleClick}
        isLoading={isLoading}
        {...commonProps}>
        {mainButtonText}
      </RequestButton>
    );
  };

  const SecondaryButton = () =>
    SecondButton || (
      <Button
        fullWidth
        onClick={handleClose}
        variant="outlined"
        color="primary">
        {closeButtonText}
      </Button>
    );

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: sx.dialogRoot }}>
      <CloseButton onClick={handleClose} />

      {type === "error" ? (
        <Warning sx={sx.errorHeaderIcon} />
      ) : (
        <Check sx={sx.successHeaderIcon} />
      )}

      <DialogTitle sx={type === "error" ? sx.errorTitle : sx.successTitle}>
        {title}
      </DialogTitle>
      {text && (
        <DialogContent sx={sx.dialogContent}>
          <DialogContentText>{text}</DialogContentText>
        </DialogContent>
      )}
      {oneAction ? (
        <DialogActions>
          <MainAction />
        </DialogActions>
      ) : (
        <DialogActions sx={sx.dialogActions}>
          <SecondaryButton />
          <MainAction />
        </DialogActions>
      )}
    </Dialog>
  );
};
export default ConfirmationDialog;
