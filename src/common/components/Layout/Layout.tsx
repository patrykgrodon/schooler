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
      <Box sx={{ flex: 1, display: "flex" }}>
        <Sidebar isOpen={isOpen} />
        <Box component="main" sx={{ flex: 1 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
