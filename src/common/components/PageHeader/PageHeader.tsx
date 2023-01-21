import { Box, Button, Typography } from "@mui/material";

type PageHeaderProps = {
  textButton: string;
  textHeader: string;
  onClick: (...args: any) => void;
  marginBottom?: number;
};

const PageHeader = ({
  textButton,
  textHeader,
  onClick,
  marginBottom = 2,
}: PageHeaderProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <Typography variant="h3" component="h1" sx={{ marginBottom }}>
        {textHeader}
      </Typography>
      <Button onClick={onClick}>{textButton}</Button>
    </Box>
  );
};

export default PageHeader;
