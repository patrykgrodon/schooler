import { Paper } from "@mui/material";
import Message from "../Message/Message";
import MessageListContainer from "../MessageListContainer/MessageListContainer";

const MessagesInbox = () => {
  return (
    <Paper
      sx={{
        flex: 1,
        overflow: "auto",
        display: "flex",
        border: (theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: 1,
      }}>
      <MessageListContainer />
      <Message />
    </Paper>
  );
};

export default MessagesInbox;
