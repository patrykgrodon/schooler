import { Box } from "@mui/material";
import MessageList from "./MessageList/MessageList";
import Search from "./Search/Search";

const MessageListContainer = () => {
  return (
    <Box
      sx={{
        borderRight: (theme) => `1px solid ${theme.palette.divider}`,
        display: "flex",
        flexDirection: "column",
      }}>
      <Search />
      <MessageList />
    </Box>
  );
};

export default MessageListContainer;
