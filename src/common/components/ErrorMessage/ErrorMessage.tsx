import { Typography, TypographyProps } from "@mui/material";

type ErrorMessageProps = TypographyProps & { error: string };

const ErrorMessage = ({ error, ...props }: ErrorMessageProps) => {
  return (
    <Typography variant="caption" color="error" {...props}>
      {error}
    </Typography>
  );
};

export default ErrorMessage;
