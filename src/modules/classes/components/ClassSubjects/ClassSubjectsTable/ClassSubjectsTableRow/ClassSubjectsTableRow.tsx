import { TableRow, TableCell } from "@mui/material";
import { CenteredCell } from "common/components";
import { ClassSubject } from "modules/subjects/types";

type ClassSubjectsTableRowProps = {
  classSubject: ClassSubject;
};

const ClassSubjectsTableRow = ({
  classSubject,
}: ClassSubjectsTableRowProps) => {
  const { subject, teacher } = classSubject;
  return (
    <TableRow
      sx={{
        "&:last-child td": {
          border: "none",
        },
      }}>
      <TableCell>{subject.name}</TableCell>
      <CenteredCell>
        {teacher.firstName} {teacher.lastName}
      </CenteredCell>
    </TableRow>
  );
};

export default ClassSubjectsTableRow;
