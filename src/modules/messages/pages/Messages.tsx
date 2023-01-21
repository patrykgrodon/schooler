import { Box } from "@mui/material";
import { PageHeader } from "common/components";
import { MessagesInbox } from "../components";

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
      <PageHeader
        onClick={() => {}}
        textButton="Napisz wiadomość"
        textHeader="Wiadomości"
      />
      <MessagesInbox />
    </Box>
  );
};

export default Messages;
