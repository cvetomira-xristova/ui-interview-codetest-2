import { Box, Avatar } from "@mui/material";
import type { GetUserQuery } from '@/types/graphql';

const userAvatarStyles = {
  userAvatar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    pb: { xs: 2, sm: 3, md: 4 },
  },
};

export interface UserAvatarProps {
  user: GetUserQuery['user'] | undefined;
}

export const UserAvatar = ({ user }: UserAvatarProps) => {
  if (!user) return null;

  return (
    <Box sx={userAvatarStyles.userAvatar}>
      <Avatar sizes="small" src={user.avatar} alt={user.name} />
    </Box>
  );
};

