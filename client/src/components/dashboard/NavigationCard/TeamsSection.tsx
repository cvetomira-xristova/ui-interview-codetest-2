import { useState } from "react";
import { useQuery } from "@apollo/client/react";
import {
    Box,
    Typography,
    Button,
    Collapse,
    useTheme,
    CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { GET_TEAMS } from "@/graphql/queries/GetTeams";
import { useDashboardStore } from "@/state/dashboardStore";
import { styles as navButtonStyles } from "./NavButton";
import { styles as teamItemStyles } from "./TeamItem";
import type { GetTeamsQuery, GetTeamsQueryVariables } from "@/types/graphql";
import { TeamItem } from "./TeamItem";

const styles = {
    ...navButtonStyles,
    ...teamItemStyles,
    teamsSection: {
        display: "flex",
        flexDirection: "column",
        gap: 1,
        position: "relative",
    },
    teamsCollapseWrapper: {
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        overflow: "visible",
        zIndex: 1,
    },
    loadingContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: "16px",
        minHeight: "60px",
    },
    iconContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    expandIcon: {
        color: "#363636",
        fontSize: "16px",
    },
};

export const TeamsSection = () => {
    const theme = useTheme();
    const [teamsExpanded, setTeamsExpanded] = useState(true);
    const currentSpaceId = useDashboardStore((state) => state.currentSpaceId);
    const spaceId = currentSpaceId ?? "nasa-1";

    const { data: teamsData, loading: teamsLoading } = useQuery<GetTeamsQuery, GetTeamsQueryVariables>(GET_TEAMS, { variables: { spaceId }, });

    const teams = teamsData?.teams || [];

    return (
        <Box sx={styles.teamsSection}>
            <Button
                onClick={() => setTeamsExpanded((prev) => !prev)}
                sx={{
                    ...styles.navButton,
                    ...styles.navButtonHover,
                }}
            >
                <Typography sx={styles.navItem}>
                    Teams
                </Typography>
                <Box sx={styles.iconContainer}>
                    {teamsExpanded ? (
                        <ExpandLessIcon sx={styles.expandIcon} />
                    ) : (
                        <ExpandMoreIcon sx={styles.expandIcon} />
                    )}
                </Box>
            </Button>

            <Box sx={styles.teamsCollapseWrapper}>
                <Collapse
                    in={teamsExpanded}
                    timeout="auto"
                >
                    <Box>
                        {teamsLoading && (
                            <Box sx={styles.loadingContainer}>
                                <CircularProgress size={20} sx={{ color: theme.palette.text.secondary }} />
                            </Box>
                        )}

                        {!teamsLoading && teams.length > 0 && (
                            teams.map((team, index) => (
                                <TeamItem key={team.id} team={team} index={index} />
                            ))
                        )}

                        {!teamsLoading && teams.length === 0 && (
                            <Typography sx={styles.teamName}>
                                No teams available for this space
                            </Typography>
                        )}
                    </Box>
                </Collapse>
            </Box >
        </Box >
    );
};

