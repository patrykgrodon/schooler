import { store } from "app/store";
import { Provider } from "react-redux";
import MuiThemeProviders from "./MuiThemeProviders";

type AppProvidersProps = {
  children: React.ReactNode;
};

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <MuiThemeProviders>
      <Provider store={store}>{children}</Provider>
    </MuiThemeProviders>
  );
};

export default AppProviders;
