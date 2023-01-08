import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Typography variant="h3" component="h1">
          Wiadomości
        </Typography>
        <Button>Napisz wiadomość</Button>
      </Box>
      <Paper
        sx={{
          flex: 1,
          overflow: "auto",
          display: "flex",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
        }}>
        <Box
          sx={{
            borderRight: (theme) => `1px solid ${theme.palette.divider}`,
            display: "flex",
            flexDirection: "column",
          }}>
          <Box
            sx={{
              m: 1,
              height: "40px",
              display: "flex",
              alignItems: "center",
            }}>
            <TextField placeholder="Wyszukaj..." fullWidth size="small" />
          </Box>
          <List
            sx={{
              borderTop: (theme) => `1px solid ${theme.palette.divider}`,
              overflow: "auto",
              flex: 1,
            }}>
            {["1", "2", "3", "4", "5", "6", "7"].map((i) => (
              <ListItem
                key={i}
                disablePadding
                sx={{
                  display: "block",
                  px: 0.5,
                }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                    borderRadius: 2,
                    backgroundColor: (theme) =>
                      i === "2" ? theme.palette.action.hover : undefined,
                  }}>
                  <Avatar sx={{ mr: 2 }}>N{i}</Avatar>
                  <Box>
                    <ListItemText
                      primary={`Nauczyciel ${i}`}
                      primaryTypographyProps={{ variant: "subtitle1" }}
                      secondary={"Piszę do Ciebie w sprawie..."}
                      sx={{ fontWeight: 700 }}
                    />
                  </Box>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}>
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
          <Box
            sx={{
              flex: 1,
              p: 2,
              borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            }}>
            Treśc wiadomości
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Messages;
