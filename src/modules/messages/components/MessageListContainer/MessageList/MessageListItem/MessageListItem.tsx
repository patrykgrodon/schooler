import {
  Avatar,
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

type MessageListItemProps = {
  index: number;
};

const MessageListItem = ({ index }: MessageListItemProps) => {
  return (
    <ListItem
      key={index}
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
            index === 2 ? theme.palette.action.hover : undefined,
        }}>
        <Avatar sx={{ mr: 2 }}>N{index}</Avatar>
        <Box>
          <ListItemText
            primary={`Nauczyciel ${index}`}
            primaryTypographyProps={{ variant: "subtitle1" }}
            secondary={"Piszę do Ciebie w sprawie..."}
            sx={{ fontWeight: 700 }}
          />
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

export default MessageListItem;
