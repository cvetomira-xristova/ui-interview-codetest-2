import { useQuery } from "@apollo/client/react";
import { Box, Typography, Skeleton, Grid } from "@mui/material";
import { GET_RECOMMENDATIONS } from "@/graphql/queries/GetRecommendations";
import { useDashboardStore } from "@/state/dashboardStore";
import type { GetRecommendationsQuery, GetRecommendationsQueryVariables } from "@/types/graphql";

const styles = {
    gridItemSize: {
        xs: 12,
        sm: 6,
        md: 6,
        lg: 3,
    },
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
    rightSection: {
        display: "flex",
        alignItems: "center",
        padding: 0,
    },
    actionItemPrimary: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: { xs: "10px", sm: "11px", md: "12px" },
        gap: { xs: "8px", sm: "9px", md: "10px" },
        width: "100%",
        minWidth: 0,
        height: { xs: "36px", sm: "37px", md: "38px" },
        background: "#F8F5DE",
        borderRadius: "6px",
        boxSizing: "border-box",
    },
    actionItemSecondary: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: { xs: "10px", sm: "11px", md: "12px" },
        gap: { xs: "8px", sm: "9px", md: "10px" },
        width: "100%",
        minWidth: 0,
        height: { xs: "36px", sm: "37px", md: "38px" },
        background: "rgba(0, 0, 0, 0.1)",
        borderRadius: "6px",
        boxSizing: "border-box",
    },
    actionTextPrimary: {
        width: "auto",
        height: { xs: "13px", sm: "13.5px", md: "14px" },
        fontFamily: "'Instrument Sans'",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: { xs: "11px", sm: "11.5px", md: "12px" },
        lineHeight: "120%",
        color: "#0A0A22",
        flex: "none",
        flexGrow: 1,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        minWidth: 0,
    },
    actionTextSecondary: {
        width: "auto",
        height: { xs: "13px", sm: "13.5px", md: "14px" },
        fontFamily: "'Instrument Sans'",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: { xs: "11px", sm: "11.5px", md: "12px" },
        lineHeight: "120%",
        color: "#F8F5DE",
        flex: "none",
        flexGrow: 1,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        minWidth: 0,
        '&:hover': {
            cursor: "pointer",
        }
    },
    fixBadge: {
        width: "auto",
        minWidth: "18px",
        height: "13px",
        fontFamily: "'Sora'",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "10px",
        lineHeight: "13px",
        textAlign: "right",
        letterSpacing: "0.07em",
        textTransform: "uppercase",
        color: "#FFFFFF",
        background: "rgba(0, 0, 0, 0.3)",
        padding: "2px 6px",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
    },
    skeletonTitle: {
        height: "23px",
        borderRadius: "4px",
        width: "100%",
        maxWidth: "187px",
    },
    skeletonSubtitle: {
        height: "18px",
        borderRadius: "4px",
        marginTop: "4px",
        width: "100%",
        maxWidth: "200px",
    },
    skeletonActionItem: {
        width: "100%",
        height: "38px",
        borderRadius: "6px",
    },
    skeletonActionItemPrimary: {
        width: "100%",
        height: "38px",
        borderRadius: "6px",
        bgcolor: "rgba(248, 245, 222, 0.2)",
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
                        <>
                            <Typography sx={styles.title}>RECOMMENDATIONS</Typography>
                            <Typography sx={styles.subtitle}>Steps to improve your system health</Typography>
                        </>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 9 }} sx={{ display: "flex", minWidth: 0 }}>
                    <Grid container spacing={{ xs: 1, sm: 1.5, md: 2 }} sx={{ width: "100%" }}>
                        {loading ? (
                            <>
                                <Grid size={styles.gridItemSize}>
                                    <Skeleton
                                        variant="rectangular"
                                        sx={styles.skeletonActionItemPrimary}
                                        animation="wave"
                                    />
                                </Grid>
                                <Grid size={styles.gridItemSize}>
                                    <Skeleton
                                        variant="rectangular"
                                        sx={styles.skeletonActionItem}
                                        animation="wave"
                                    />
                                </Grid>
                                <Grid size={styles.gridItemSize}>
                                    <Skeleton
                                        variant="rectangular"
                                        sx={styles.skeletonActionItem}
                                        animation="wave"
                                    />
                                </Grid>
                                <Grid size={styles.gridItemSize}>
                                    <Skeleton
                                        variant="rectangular"
                                        sx={styles.skeletonActionItem}
                                        animation="wave"
                                    />
                                </Grid>
                            </>
                        ) : (
                            <>
                                <Grid size={styles.gridItemSize}>
                                    <Box sx={styles.actionItemPrimary}>
                                        <Typography sx={styles.actionTextPrimary}>
                                            {readyToFix} fixes ready
                                        </Typography>
                                        <Typography sx={styles.fixBadge}>Fix</Typography>
                                    </Box>
                                </Grid>
                                <Grid size={styles.gridItemSize}>
                                    <Box sx={styles.actionItemSecondary}>
                                        <Typography sx={styles.actionTextSecondary}>
                                            Review {readyToReview} new findings
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid size={styles.gridItemSize}>
                                    <Box sx={styles.actionItemSecondary}>
                                        <Typography sx={styles.actionTextSecondary}>
                                            {approachingSla} tasks due soon
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid size={styles.gridItemSize}>
                                    <Box sx={styles.actionItemSecondary}>
                                        <Typography sx={styles.actionTextSecondary}>
                                            Quarterly report ready
                                        </Typography>
                                    </Box>
                                </Grid>
                            </>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default RecommendationsCard;