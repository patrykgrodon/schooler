import { Avatar, SxProps } from "@mui/material";

type UserAvatarProps = {
  userInitials: string;
  url?: string;
  sx?: SxProps;
  size?: "small" | "medium" | "large";
};

const sizes = {
  small: 30,
  medium: 40,
  large: 50,
};

const UserAvatar = ({
  userInitials,
  url,
  sx,
  size = "medium",
}: UserAvatarProps) => {
  const width = sizes[size];
  const height = sizes[size];

  return (
    <Avatar src={url} sx={{ width, height, ...sx }}>
      {userInitials}
    </Avatar>
  );
};

export default UserAvatar;
