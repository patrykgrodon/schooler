import { List } from "@mui/material";
import MessageListItem from "./MessageListItem/MessageListItem";

const MessageList = () => {
  return (
    <List
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        overflow: "auto",
        flex: 1,
      }}>
      {["1", "2", "3", "4", "5", "6", "7"].map((_, i) => (
        <MessageListItem key={i} index={i} />
      ))}
    </List>
  );
};

export default MessageList;
