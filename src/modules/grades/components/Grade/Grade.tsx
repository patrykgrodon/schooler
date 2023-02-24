import { Box, Tooltip, useTheme } from "@mui/material";

type GradeProps = {
  score: number;
  average?: boolean;
  description?: string;
};

const Grade = ({ score, average = false, description }: GradeProps) => {
  const theme = useTheme();
  const scoreAsText = score % 1 === 0.5 ? `+${Math.floor(score)}` : score;

  const getBgColor = () => {
    if (score < 2) return theme.palette.error.main;
    if (score >= 2 && score < 3) return theme.palette.warning.dark;
    if (score >= 3 && score < 4) return theme.palette.warning.light;
    if (score >= 4 && score < 5) return theme.palette.success.light;
    if (score >= 4 && score < 6) return theme.palette.success.dark;
    return "#ffd23f";
  };
  const getTooltipTitle = () => {
    switch (score) {
      case 1:
        return "Niedostateczny";
      case 1.5:
        return "Niedostateczny +";
      case 2:
        return "Dopuszczający";
      case 2.5:
        return "Dopuszczający +";
      case 3:
        return "Dostateczny";
      case 3.5:
        return "Dostateczny +";
      case 4:
        return "Dobry";
      case 4.5:
        return "Dobry +";
      case 5:
        return "Bardzo dobry";
      case 5.5:
        return "Bardzo dobry +";
      case 6:
        return "Celujący";
      default:
        return "";
    }
  };
  return (
    <Tooltip title={average ? "" : description || getTooltipTitle()}>
      <Box
        sx={{
          backgroundColor: getBgColor(),
          p: (theme) => theme.spacing(0.5, 1),
          fontWeight: 700,
          borderRadius: 1,
          width: "26px",
          height: "26px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}>
        {average ? score : scoreAsText}
      </Box>
    </Tooltip>
  );
};

export default Grade;
