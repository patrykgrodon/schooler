import { Avatar, Box, Typography } from "@mui/material";

const MessageInfo = () => {
  return (
    <Box
      sx={{
        p: 1,
        display: "flex",
        alignItems: "center",
      }}>
      <Avatar sx={{ mr: 2 }}>N{2}</Avatar>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "space-between",
        }}>
        <Box>
          <Typography variant="subtitle2">
            <Box component="span" sx={{ fontWeight: "400" }}>
              Od:
            </Box>{" "}
            Nauczyciel 2
          </Typography>
          <Typography variant="subtitle2">
            <Box component="span" sx={{ fontWeight: "400" }}>
              Temat:
            </Box>{" "}
            Zadanie domowe
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{ color: (theme) => theme.palette.text.secondary }}>
          08-01-2023 17:05
        </Typography>
      </Box>
    </Box>
  );
};

export default MessageInfo;
