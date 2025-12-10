import { Box, Typography } from "@mui/material";
import type { Team } from '@/types/graphql';

const teamColors = [
  "#A7F9AC",
  "#0A9EAA",
  "#E21BE0",
  "#290D7B",
];

export const getTeamColor = (index: number): string => {
  return teamColors[index] || teamColors[0];
};

export const styles = {
  teamItem: {
    display: "flex",
    alignItems: "center",
    gap: { xs: "6px", sm: "7px", md: "8px" },
    p: { xs: "6px 12px", sm: "7px 14px", md: "8px 16px" },
    borderRadius: "8px",
  },
  teamIndicator: {
    width: { xs: "10px", sm: "11px", md: "12px" },
    height: { xs: "10px", sm: "11px", md: "12px" },
    borderRadius: "50%",
  },
  teamName: {
    fontFamily: '"Instrument Sans"',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: { xs: "11px", sm: "11.5px", md: "12px" },
    lineHeight: "150%",
    color: "primary.contrastText",
  },
};

interface TeamItemProps {
  team: Team;
  index: number;
}

export const TeamItem = ({ team, index }: TeamItemProps) => {
  return (
    <Box sx={styles.teamItem}>
      <Box sx={{ ...styles.teamIndicator, background: getTeamColor(index) }} />
      <Typography sx={styles.teamName}>
        {team.name}
      </Typography>
    </Box>
  );
};

