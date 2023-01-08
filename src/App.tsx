import AppProviders from "common/providers/AppProviders";
import Router from "routes/Router";

const App = () => {
  return (
    <AppProviders>
      <Router />
    </AppProviders>
  );
};

export default App;
