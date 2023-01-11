import { TableCell, TableRow } from "@mui/material";
import { lessonPlan, lessonStructure } from "modules/lessonPlan/constants";

type LessonPlanTableRowProps = {
  index: number;
};

const LessonPlanTableRow = ({ index }: LessonPlanTableRowProps) => {
  return (
    <TableRow
      sx={{
        "&:last-child td": {
          border: "none",
        },
      }}>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{lessonStructure[index] || "---"}</TableCell>
      <TableCell>{lessonPlan.monday[index] || "---"}</TableCell>
      <TableCell>{lessonPlan.tuesday[index] || "---"}</TableCell>
      <TableCell>{lessonPlan.wednesday[index] || "---"}</TableCell>
      <TableCell>{lessonPlan.thursday[index] || "---"}</TableCell>
      <TableCell>{lessonPlan.friday[index] || "---"}</TableCell>
    </TableRow>
  );
};

export default LessonPlanTableRow;
