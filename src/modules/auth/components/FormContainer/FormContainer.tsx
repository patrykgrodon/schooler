import { Box } from "@mui/material";

type FormContainerProps = {
  children: React.ReactNode;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
};

const FormContainer = ({ children, onSubmit }: FormContainerProps) => {
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: 3,
        width: "430px",
        maxWidth: "95%",
      }}>
      {children}
    </Box>
  );
};

export default FormContainer;
