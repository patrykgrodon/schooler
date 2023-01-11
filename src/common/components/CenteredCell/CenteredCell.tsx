import { Box, BoxProps, TableCell, TableCellProps } from "@mui/material";

type CenteredCellProps = {
  children: React.ReactNode;
  tableCellProps?: TableCellProps;
  boxProps?: BoxProps;
};

const CenteredCell = ({
  children,
  boxProps,
  tableCellProps,
}: CenteredCellProps) => {
  return (
    <TableCell {...tableCellProps}>
      <Box
        {...boxProps}
        sx={{
          display: "flex",
          justifyContent: "center",
          ...(boxProps?.sx ? boxProps.sx : {}),
        }}>
        {children}
      </Box>
    </TableCell>
  );
};

export default CenteredCell;
