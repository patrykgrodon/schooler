import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { lessonStructure } from "modules/lessonPlan/constants";
import LessonPlanTableRow from "../LessonPlanTableRow/LessonPlanTableRow";

const headers = ["", "Godz.", "Pon", "Wt", "Śr", "Czw", "Pt"];

const LessonPlanTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {lessonStructure.map((_, i) => (
            <LessonPlanTableRow key={i} index={i} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LessonPlanTable;
