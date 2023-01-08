import { Box } from "@mui/material";
import MessageBody from "./MessageBody/MessageBody";
import MessageInfo from "./MessageInfo/MessageInfo";

const Message = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}>
      <MessageInfo />
      <MessageBody />
    </Box>
  );
};

export default Message;
