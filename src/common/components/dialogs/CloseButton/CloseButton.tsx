import { CloseOutlined } from "@mui/icons-material";
import { IconButtonProps, IconButton } from "@mui/material";

type CloseButtonProps = { onClick: () => void } & IconButtonProps;

const CloseButton = ({ onClick, ...iconButtonProps }: CloseButtonProps) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{ position: "absolute", top: 10, right: 10 }}
      {...iconButtonProps}>
      <CloseOutlined />
    </IconButton>
  );
};

export default CloseButton;
