import { Box } from "@mui/material";
import { Header, MessagesInbox } from "../components";

const Messages = () => {
  return (
    <Box
      sx={{
        height: "100%",
        overflow: "auto",
        display: "flex",
        rowGap: 1,
        flexDirection: "column",
      }}>
      <Header />
      <MessagesInbox />
    </Box>
  );
};

export default Messages;
