import { useQuery } from "@apollo/client/react";
import { Box, Grid, Typography } from "@mui/material";
import { GET_RECOMMENDATIONS } from "@/graphql/queries/GetRecommendations";
import { useDashboardStore } from "@/state/dashboardStore";
import type { GetRecommendationsQuery, GetRecommendationsQueryVariables } from "@/types/graphql";
import { RecommendationsActionItems } from "./RecommendationItems";

const styles = {
    container: {
        padding: { xs: "16px", sm: "24px", md: "32px" },
        width: "100%",
        minHeight: { xs: "auto", sm: "102px" },
        background: "rgba(0, 0, 0, 0.3)",
        boxShadow: "0px 489px 196px rgba(0, 0, 0, 0.01), 0px 275px 165px rgba(0, 0, 0, 0.05), 0px 122px 122px rgba(0, 0, 0, 0.09), 0px 31px 67px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(12px)",
        borderRadius: { xs: "16px", sm: "20px", md: "24px" },
        boxSizing: "border-box",
    },
    leftSection: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 0,
    },
    title: {
        fontFamily: "'Mona Sans'",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: { xs: "14px", sm: "15px", md: "16px" },
        lineHeight: "23px",
        textTransform: "uppercase",
        color: "#FFFFFF",
        fontStretch: 125,
        margin: "-4px 0px",
    },
    subtitle: {
        fontFamily: "'Instrument Sans'",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: { xs: "11px", sm: "11.5px", md: "12px" },
        lineHeight: "150%",
        color: "#F8F5DE",
    },
};

const DEFAULT_RECOMMENDATIONS = {
    readyToFix: 0,
    readyToReview: 0,
    approachingSla: 0,
};

const RecommendationsCard = () => {
    const currentSpaceId = useDashboardStore((state) => state.currentSpaceId);
    const spaceId = currentSpaceId ?? "nasa-1";

    const { data: recommendationsData, loading } = useQuery<GetRecommendationsQuery, GetRecommendationsQueryVariables>(GET_RECOMMENDATIONS, { variables: { spaceId } });

    const { readyToFix, readyToReview, approachingSla } = recommendationsData?.recommendations ?? DEFAULT_RECOMMENDATIONS;

    return (
        <Box sx={styles.container}>
            <Grid container spacing={{ xs: 2, sm: 3, md: 3, lg: 6 }} alignItems="center">
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 3 }}>
                    <Box sx={styles.leftSection}>
                        <Typography sx={styles.title}>RECOMMENDATIONS</Typography>
                        <Typography sx={styles.subtitle}>Steps to improve your system health</Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 9 }} sx={{ display: "flex", minWidth: 0 }}>
                    <RecommendationsActionItems
                        loading={loading}
                        readyToFix={readyToFix}
                        readyToReview={readyToReview}
                        approachingSla={approachingSla}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default RecommendationsCard;

