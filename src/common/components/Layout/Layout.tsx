import { Box } from "@mui/material";
import useSidebar from "common/hooks/useSidebar";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { isOpen, toggleSidebar } = useSidebar();
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
            p: 5,
          }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
