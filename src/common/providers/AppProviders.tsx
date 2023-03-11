import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContextProvider from "modules/auth/contexts/authContext";
import MuiThemeProviders from "./MuiThemeProviders";
import ToastProvider from "./ToastProvider";

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
        <ToastProvider>
          <AuthContextProvider>{children}</AuthContextProvider>
        </ToastProvider>
      </QueryClientProvider>
    </MuiThemeProviders>
  );
};

export default AppProviders;
