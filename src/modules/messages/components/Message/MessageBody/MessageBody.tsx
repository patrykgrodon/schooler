import { Box } from "@mui/material";

const MessageBody = () => {
  return (
    <Box
      sx={{
        flex: 1,
        p: 2,
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}>
      Treśc wiadomości
    </Box>
  );
};

export default MessageBody;
