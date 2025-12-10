import { Grid, Skeleton } from "@mui/material";
import { RecommendationItem } from './RecommendationItem';

const styles = {
    gridItemSize: {
        xs: 12,
        sm: 6,
        md: 6,
        lg: 3,
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

interface RecommendationsActionItemsProps {
    loading: boolean;
    readyToFix: number;
    readyToReview: number;
    approachingSla: number;
}

export const RecommendationsActionItems = ({
    loading,
    readyToFix,
    readyToReview,
    approachingSla
}: RecommendationsActionItemsProps) => {
    return (
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
                        <RecommendationItem
                            text={`${readyToFix} fixes ready`}
                            isPrimary
                            badge="Fix"
                        />
                    </Grid>
                    <Grid size={styles.gridItemSize}>
                        <RecommendationItem
                            text={`Review ${readyToReview} new findings`}
                        />
                    </Grid>
                    <Grid size={styles.gridItemSize}>
                        <RecommendationItem
                            text={`${approachingSla} tasks due soon`}
                        />
                    </Grid>
                    <Grid size={styles.gridItemSize}>
                        <RecommendationItem
                            text="Quarterly report ready"
                        />
                    </Grid>
                </>
            )}
        </Grid>
    );
};

