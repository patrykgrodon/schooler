import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContextProvider from "modules/auth/contexts/authContext";
import MuiThemeProviders from "./MuiThemeProviders";

type AppProvidersProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
    },
  },
});

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <MuiThemeProviders>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </QueryClientProvider>
    </MuiThemeProviders>
  );
};

export default AppProviders;
