import { Avatar, SxProps } from "@mui/material";

type UserAvatarProps = {
  userInitials: string;
  url?: string;
  sx?: SxProps;
  size?: "small" | "medium" | "large";
};

export const userAvatarSizes = {
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
  const width = userAvatarSizes[size];
  const height = userAvatarSizes[size];

  return (
    <Avatar
      src={url}
      sx={{ width, height, ...sx }}
      aria-label="awatar użytkownika">
      {userInitials}
    </Avatar>
  );
};

export default UserAvatar;
