import { Student } from "modules/students/types";
import { EditOutlined, VisibilityOutlined } from "@mui/icons-material";
import { CenteredCell } from "common/components";
import { generatePath, Link } from "react-router-dom";
import routes from "routes/routePaths";
import {
  Box,
  IconButton,
  Link as MuiLink,
  TableCell,
  TableRow,
} from "@mui/material";

type StudentsTableRowProps = {
  student: Student;
};

const StudentsTableRow = ({ student }: StudentsTableRowProps) => {
  const { firstName, lastName, email } = student;
  const fullName = `${firstName} ${lastName}`;
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
          to={generatePath(routes.Student, { studentId: fullName })}>
          <strong>{fullName}</strong>
        </Box>
      </TableCell>
      <CenteredCell>{student.class.name}</CenteredCell>
      <CenteredCell>
        <MuiLink href={`mailto:${email}`}>{email}</MuiLink>
      </CenteredCell>
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

export default StudentsTableRow;
