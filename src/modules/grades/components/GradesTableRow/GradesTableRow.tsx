import { TableRow, TableCell } from "@mui/material";
import { CenteredCell } from "common/components";
import { calcAvg } from "modules/grades/utils/calcAvg";
import Grade from "../Grade/Grade";
const firstSemesterGrades = [4, 3, 2, 1];
const secondSemesterGrades = [6, 5.5, 5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1];

type GradesTableRowProps = {
  subject: string;
};

const GradesTableRow = ({ subject }: GradesTableRowProps) => {
  return (
    <TableRow
      sx={{
        "&:last-child td": {
          border: "none",
        },
      }}>
      <TableCell>{subject}</TableCell>
      <CenteredCell boxProps={{ sx: { columnGap: 1 } }}>
        {firstSemesterGrades.map((score, i) => (
          <Grade score={score} key={i} />
        ))}
      </CenteredCell>
      <CenteredCell boxProps={{ sx: { columnGap: 1 } }}>
        {secondSemesterGrades.map((score, i) => (
          <Grade score={score} key={i} />
        ))}
      </CenteredCell>
      <CenteredCell tableCellProps={{ sx: { width: "140px" } }}>
        <Grade
          score={calcAvg(firstSemesterGrades.concat(secondSemesterGrades))}
          average
        />
      </CenteredCell>
      <CenteredCell tableCellProps={{ sx: { width: "140px" } }}>
        <Grade score={2} />
      </CenteredCell>
      <CenteredCell tableCellProps={{ sx: { width: "140px" } }}>
        <Grade score={3} />
      </CenteredCell>
    </TableRow>
  );
};

export default GradesTableRow;
