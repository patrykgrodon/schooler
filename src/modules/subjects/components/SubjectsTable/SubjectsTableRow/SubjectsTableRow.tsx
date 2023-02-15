import { TableRow } from "@mui/material";
import { Subject } from "modules/subjects/types";
import { EditOutlined, VisibilityOutlined } from "@mui/icons-material";
import { CenteredCell } from "common/components";
import { IconButton, TableCell } from "@mui/material";

type SubjectsTableRowProps = {
  subject: Subject;
};

const SubjectsTableRow = ({ subject }: SubjectsTableRowProps) => {
  const { name, teachers } = subject;
  return (
    <TableRow
      sx={{
        "&:last-child td": {
          border: "none",
        },
      }}>
      <TableCell>{name}</TableCell>
      <CenteredCell>
        {teachers
          .map(({ firstName, lastName }) => `${firstName} ${lastName}`)
          .join(", ")}
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

export default SubjectsTableRow;
