import { Box, SxProps, Typography } from "@mui/material";

type ErrorViewProps = {
  text?: string;
  sx?: SxProps;
};

const defaultText = "Wystąpił nieoczekiwany problem! Spróbuj odświeżyć stronę.";

const ErrorView = ({ sx, text = defaultText }: ErrorViewProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "350px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}>
      <Typography color="error" variant="h5">
        {text}
      </Typography>
    </Box>
  );
};

export default ErrorView;
