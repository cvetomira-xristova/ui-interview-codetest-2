import { useQuery } from "@apollo/client/react";
import Grid from "@mui/material/Grid";
import { Skeleton } from "@mui/material";
import { GET_METRICS } from "@/graphql/queries/GetMetrics";
import { useDashboardStore } from "@/state/dashboardStore";
import type { GetMetricsQuery, GetMetricsQueryVariables } from "@/types/graphql";
import { MetricCard } from "./MetricCard";

const containerStyles = {
    filter: "drop-shadow(0px 489px 196px rgba(0, 0, 0, 0.01)) drop-shadow(0px 275px 165px rgba(0, 0, 0, 0.05)) drop-shadow(0px 122px 122px rgba(0, 0, 0, 0.09)) drop-shadow(0px 31px 67px rgba(0, 0, 0, 0.1))",
};

const skeletonCardStyles = {
    height: "233px",
    borderRadius: "24px",
    background: "rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(12px)",
};

const Metrics = () => {
    const currentSpaceId = useDashboardStore((state) => state.currentSpaceId);
    const spaceId = currentSpaceId ?? "nasa-1";

    const { data: metricsData, loading } = useQuery<GetMetricsQuery, GetMetricsQueryVariables>(
        GET_METRICS,
        { variables: { spaceId } }
    );

    if (loading) {
        return (
            <Grid container spacing={{ xs: 2, sm: 1.5, md: 2 }} sx={containerStyles}>
                {[1, 2, 3, 4].map((i) => (
                    <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                        <Skeleton
                            variant="rectangular"
                            sx={skeletonCardStyles}
                            animation="wave"
                        />
                    </Grid>
                ))}
            </Grid>
        );
    }

    if (!metricsData?.metrics) {
        return null;
    }

    const { totalRisk, criticalExposures, compliance, speed } = metricsData.metrics;

    return (
        <Grid container spacing={{ xs: 2, sm: 1.5, md: 2 }} sx={containerStyles}>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <MetricCard
                    value={totalRisk.value}
                    delta={totalRisk.delta}
                    title="Total Risk Score"
                    description="Composite score across all inventory"
                    isPositive={totalRisk.delta < 0}
                    animationDelay={0}
                    min={0}
                    max={1000}
                />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <MetricCard
                    value={criticalExposures.value}
                    delta={criticalExposures.delta}
                    title="Critical exposures"
                    description="Vulnerabilities requiring immediate fixes"
                    isPositive={criticalExposures.delta < 0}
                    useRedBackground
                    animationDelay={0.1}
                    min={0}
                    max={10}
                />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <MetricCard
                    isPercentage
                    value={compliance.value}
                    delta={compliance.delta}
                    title="Policy Compliance"
                    description="Pass/fail trend against your checks"
                    isPositive={compliance.delta > 0}
                    animationDelay={0.2}
                    min={0}
                    max={100}
                />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <MetricCard
                    isHours
                    value={speed.value / 60}
                    delta={speed.delta / 60}
                    title="Remediation Speed"
                    description="Avg time to close critical vs high findings"
                    isPositive={speed.delta < 0}
                    animationDelay={0.3}
                    min={0}
                    max={100}
                />
            </Grid>
        </Grid>
    );
};

export default Metrics;
