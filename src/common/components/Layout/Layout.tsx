import { Box } from "@mui/material";
import useSidebar from "common/hooks/useSidebar";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const Layout = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Header toggleSidebar={toggleSidebar} />
      <Box sx={{ flex: 1, display: "flex" }}>
        <Sidebar isOpen={isOpen} />
        <Box component="main" sx={{ flex: 1 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          neque quis, voluptatibus libero eius delectus ipsam et labore quae
          ipsum repellendus molestias exercitationem accusantium omnis vero
          reiciendis alias? Repellat minima beatae quia quasi exercitationem
          omnis voluptates ut. Minus nam quisquam illum suscipit sit aliquam
          vitae, quo placeat ad quaerat reiciendis saepe veniam vel earum
          accusamus assumenda deleniti reprehenderit sequi! Delectus, sit libero
          nemo rem maiores odit saepe vero in vitae corrupti autem vel accusamus
          exercitationem animi ea eaque eligendi minima aliquid! Atque quam
          iusto explicabo nam iure impedit. Minima, at voluptates nulla
          molestias quos voluptatum voluptatem saepe repellendus reiciendis ex.
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
