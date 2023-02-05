import AuthContextProvider from "modules/auth/contexts/authContext";
import MuiThemeProviders from "./MuiThemeProviders";

type AppProvidersProps = {
  children: React.ReactNode;
};

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <MuiThemeProviders>
      <AuthContextProvider>{children}</AuthContextProvider>
    </MuiThemeProviders>
  );
};

export default AppProviders;
