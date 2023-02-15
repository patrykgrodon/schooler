import { ClassType } from "modules/classes/types";
import { EditOutlined, VisibilityOutlined } from "@mui/icons-material";
import { CenteredCell } from "common/components";
import { generatePath, Link } from "react-router-dom";
import routes from "routes/routePaths";
import { Box, IconButton, TableCell, TableRow } from "@mui/material";

type ClassesTableRowProps = {
  class: ClassType;
};

const ClassesTableRow = (props: ClassesTableRowProps) => {
  const { classTeacher, name, id, students } = props.class;
  return (
    <TableRow
      sx={{
        "&:last-child td": {
          border: "none",
        },
      }}>
      <TableCell>
        <Box
          sx={{
            color: (theme) => theme.palette.text.primary,
            textDecoration: "none",
          }}
          component={Link}
          to={generatePath(routes.Class, { classId: id })}>
          <strong>{name}</strong>
        </Box>
      </TableCell>
      <CenteredCell>
        {classTeacher
          ? `${classTeacher.firstName} ${classTeacher.lastName}`
          : "---"}
      </CenteredCell>
      <CenteredCell>{students.length}</CenteredCell>
      <CenteredCell>
        {[VisibilityOutlined, EditOutlined].map((Icon, i) => (
          <IconButton
            key={i}
            size="small"
            sx={{ "&:not(:last-child)": { mr: 1 } }}>
            <Icon fontSize="small" />
          </IconButton>
        ))}
      </CenteredCell>
    </TableRow>
  );
};

export default ClassesTableRow;
