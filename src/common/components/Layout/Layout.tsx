import { Box } from "@mui/material";
import useSidebar from "common/hooks/useSidebar";
import { matchPath, useLocation } from "react-router-dom";
import routes from "routes/routePaths";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

const removePaddingRoutesList = [`${routes.Class}/*`, `${routes.Student}/*`];

const checkIfShouldRemovePadding = (pathname: string): boolean =>
  removePaddingRoutesList.some((route) => matchPath(route, pathname) !== null);

export const layoutMainPadding = { xs: 1, sm: 2, md: 4, lg: 5 } as const;

const Layout = ({ children }: LayoutProps) => {
  const { isOpen, toggleSidebar } = useSidebar();
  const location = useLocation();

  const showPadding = !checkIfShouldRemovePadding(location.pathname);

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Header toggleSidebar={toggleSidebar} />
      <Box
        sx={{
          display: "flex",
          height: { xs: "calc( 100% - 58px)", sm: "calc( 100% - 64px)" },
        }}>
        <Sidebar isOpen={isOpen} />
        <Box
          component="main"
          sx={{
            flex: 1,
            height: "100%",
            maxHeight: "100%",
            overflow: "auto",
            ...(showPadding ? { p: layoutMainPadding } : {}),
          }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
