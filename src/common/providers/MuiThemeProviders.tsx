import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import theme, { GLOBAL_FONTSIZE } from "common/styles/theme";

type MuiThemeProvidersProps = {
  children: React.ReactNode;
};

const MuiThemeProviders = ({ children }: MuiThemeProvidersProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{ html: { fontSize: GLOBAL_FONTSIZE } }} />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProviders;
