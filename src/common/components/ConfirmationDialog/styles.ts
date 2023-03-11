import { Theme } from "@mui/material";

export const sx = {
  dialogRoot: (theme: Theme) => ({
    padding: theme.spacing(4),
    minWidth: "300px",
    maxWidth: "420px",
  }),
  errorHeaderIcon: (theme: Theme) => ({
    color: theme.palette.error.main,
    margin: "0 auto",
    fontSize: 64,
  }),
  successHeaderIcon: (theme: Theme) => ({
    color: theme.palette.success.main,
    margin: "0 auto",
    fontSize: 64,
  }),
  errorTitle: (theme: Theme) => ({
    color: theme.palette.error.dark,
    textAlign: "center",
  }),
  successTitle: (theme: Theme) => ({
    color: theme.palette.success.dark,
    textAlign: "center",
  }),
  dialogContent: {
    textAlign: "center",
  },
  errorButton: (theme: Theme) => ({
    backgroundColor: theme.palette.error.main,
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
    },
  }),
  successButton: (theme: Theme) => ({
    backgroundColor: theme.palette.success.main,
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
    },
  }),
  dialogActions: (theme: Theme) => ({
    flexDirection: { xs: "column", sm: "row" },
    columnGap: 2,
    "& button:last-child": {
      marginBottom: { xs: theme.spacing(1), sm: 0 },
      marginLeft: { xs: "0", sm: theme.spacing(1) },
      order: { xs: -1, sm: 0 },
    },
  }),
};
