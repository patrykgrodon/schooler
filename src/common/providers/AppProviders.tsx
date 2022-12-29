import { store } from "app/store";
import { Provider } from "react-redux";

type AppProvidersProps = {
  children: React.ReactNode;
};

const AppProviders = ({ children }: AppProvidersProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProviders;
