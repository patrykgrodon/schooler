import { TableRow, TableCell } from "@mui/material";
import { CenteredCell } from "common/components";
import { StudentGrade } from "modules/grades/types";
import { calcAvg } from "modules/grades/utils/calcAvg";
import Grade from "../Grade/Grade";

type GradesTableRowProps = {
  grade: StudentGrade;
};

const GradesTableRow = ({ grade }: GradesTableRowProps) => {
  const { subject, finalGrade, firstTerm, midYearGrade, secondTerm } = grade;
  return (
    <TableRow
      sx={{
        "&:last-child td": {
          border: "none",
        },
      }}>
      <TableCell>{subject.name}</TableCell>
      <CenteredCell boxProps={{ sx: { columnGap: 1 } }}>
        {firstTerm.map((grade, i) => (
          <Grade key={i} score={grade.value} description={grade.description} />
        ))}
      </CenteredCell>
      <CenteredCell boxProps={{ sx: { columnGap: 1 } }}>
        {secondTerm.map((grade, i) => (
          <Grade key={i} score={grade.value} description={grade.description} />
        ))}
      </CenteredCell>
      <CenteredCell tableCellProps={{ sx: { width: "140px" } }}>
        <Grade
          score={calcAvg(
            firstTerm.concat(secondTerm).map((grade) => grade.value)
          )}
          average
        />
      </CenteredCell>
      <CenteredCell tableCellProps={{ sx: { width: "140px" } }}>
        <Grade score={midYearGrade} />
      </CenteredCell>
      <CenteredCell tableCellProps={{ sx: { width: "140px" } }}>
        <Grade score={finalGrade} />
      </CenteredCell>
    </TableRow>
  );
};

export default GradesTableRow;
