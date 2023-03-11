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
        {firstTerm.length === 0 ? "---" : null}
      </CenteredCell>
      <CenteredCell boxProps={{ sx: { columnGap: 1 } }}>
        {secondTerm.map((grade, i) => (
          <Grade key={i} score={grade.value} description={grade.description} />
        ))}
        {secondTerm.length === 0 ? "---" : null}
      </CenteredCell>
      <CenteredCell tableCellProps={{ sx: { width: "140px" } }}>
        {firstTerm.length === 0 && secondTerm.length === 0 ? (
          "---"
        ) : (
          <Grade
            score={calcAvg(
              firstTerm.concat(secondTerm).map((grade) => grade.value)
            )}
            average
          />
        )}
      </CenteredCell>
      <CenteredCell tableCellProps={{ sx: { width: "140px" } }}>
        {midYearGrade ? <Grade score={midYearGrade} /> : "---"}
      </CenteredCell>
      <CenteredCell tableCellProps={{ sx: { width: "140px" } }}>
        {finalGrade ? <Grade score={finalGrade} /> : "---"}
      </CenteredCell>
    </TableRow>
  );
};

export default GradesTableRow;
