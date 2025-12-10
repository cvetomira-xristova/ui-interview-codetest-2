import { Box, Typography } from "@mui/material";
import { Gauge } from "@/components/common/Gauge";

const styles = {
    card: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: "24px", sm: "20px", md: "24px" },
        gap: "16px",
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.3)",
        boxShadow: "0px 489px 196px rgba(0, 0, 0, 0.01), 0px 275px 165px rgba(0, 0, 0, 0.05), 0px 122px 122px rgba(0, 0, 0, 0.09), 0px 31px 67px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(12px)",
        borderRadius: "24px",
        position: "relative",
        overflow: "hidden",
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "218px",
    },
    title: {
        fontFamily: "'Mona Sans'",
        fontWeight: 700,
        fontSize: "13px",
        lineHeight: "18px",
        textAlign: "center",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "#FFFFFF",
        fontStretch: 125,
    },
    description: {
        fontFamily: "'Instrument Sans'",
        fontWeight: 400,
        fontSize: "11px",
        lineHeight: "142%",
        textAlign: "center",
        color: "#F8F5DE",
    },
};

interface MetricCardProps {
    value: number;
    delta: number;
    title: string;
    description: string;
    isPositive: boolean;
    useRedBackground?: boolean;
    isPercentage?: boolean;
    isHours?: boolean;
    min?: number;
    max?: number;
    animationDelay?: number;
}

export const MetricCard = ({
    value,
    delta,
    title,
    description,
    isPositive,
    useRedBackground = false,
    isPercentage = false,
    isHours = false,
    min = 0,
    max = 100,
    animationDelay = 0,
}: MetricCardProps) => {

    // Ideally these would be extracted to a utils file
    const formatValue = () => {
        if (isPercentage) {
            return `${Math.round(value)}%`;
        }
        if (isHours) {
            const formatted = Number.isInteger(value) ? value.toString() : value.toFixed(1);
            return `${formatted}H`;
        }
        return Number.isInteger(value) ? value.toString() : value.toFixed(1);
    };

    const formatDelta = () => {
        const absDelta = Math.abs(delta);
        const arrow = isPositive ? "↓" : "↑";
        if (isPercentage) {
            return `${arrow} ${absDelta.toFixed(1)}%`;
        }
        if (isHours) {
            return `${arrow} ${absDelta.toFixed(1)}H`;
        }
        return `${arrow} ${absDelta.toFixed(1)}`;
    };

    const getPrimaryColor = () => {
        if (useRedBackground) {
            return "#DF074F";
        }
        return "rgba(255, 255, 255, 0.4)";
    };

    return (
        <Box sx={styles.card}>
            <Gauge
                value={value}
                formattedValue={formatValue()}
                formattedDelta={formatDelta()}
                isPositive={isPositive}
                primaryColor={getPrimaryColor()}
                min={min}
                max={max}
                animationDelay={animationDelay}
            />
            <Box sx={styles.textContainer}>
                <Typography sx={styles.title}>{title}</Typography>
                <Typography sx={styles.description}>{description}</Typography>
            </Box>
        </Box>
    );
};

