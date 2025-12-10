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
    gap: "8px",
    p: "8px 16px",
    borderRadius: "8px",
  },
  teamIndicator: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
  },
  teamName: {
    fontFamily: '"Instrument Sans"',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
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

