import { Teacher } from "modules/teachers/types";
import { EditOutlined, VisibilityOutlined } from "@mui/icons-material";
import { CenteredCell } from "common/components";
import { IconButton, Link, TableCell, TableRow } from "@mui/material";

type TeachersTableRowProps = {
  teacher: Teacher;
};

const TeachersTableRow = ({ teacher }: TeachersTableRowProps) => {
  const { firstName, lastName, teacherOfClass, email, subjects } = teacher;
  const fullName = `${firstName} ${lastName}`;
  return (
    <TableRow
      sx={{
        "&:last-child td": {
          border: "none",
        },
      }}>
      <TableCell>{fullName}</TableCell>
      <CenteredCell>{subjects.map(({ name }) => name).join(", ")}</CenteredCell>
      <CenteredCell>{teacherOfClass?.name || "---"}</CenteredCell>
      <CenteredCell>
        <Link href={`mailto:${email}`}>{email}</Link>
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

export default TeachersTableRow;
