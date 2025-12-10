import { Box, Typography } from "@mui/material";
import { Gauge as MuiGauge } from "@mui/x-charts/Gauge";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const styles = {
    container: (animationDelay: number = 0) => ({
        position: "relative" as const,
        width: "200px",
        height: "145px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0,
        animation: `${fadeIn} 0.6s ease-out forwards`,
        animationDelay: `${animationDelay}s`,

    }),
    value: {
        position: "absolute",
        width: "93px",
        left: "50%",
        top: "60%",
        transform: "translate(-50%, -50%)",
        fontFamily: "'Mona Sans'",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "33px",
        lineHeight: "190%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        letterSpacing: "-0.02em",
        textTransform: "uppercase",
        color: "#F8F5DE",
        zIndex: 2,
        pointerEvents: "none",
    },
    delta: (isPositive: boolean) => ({
        position: "absolute",
        width: "93px",
        left: "calc(50% - 93px/2 + 0.5px)",
        top: "calc(50% - 25px/2 + 61px)",
        fontFamily: "'Sora'",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "13px",
        lineHeight: "190%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        letterSpacing: "-0.02em",
        textTransform: "uppercase",
        color: isPositive ? "#2FC089" : "#DF074F",
        zIndex: 2,
        pointerEvents: "none",
    }),
    gauge: (primaryColor: string) => ({
        "& .MuiGauge-valueArc": {
            fill: primaryColor,
        },
        "& .MuiGauge-valueText": {
            display: "none",
        },
    }),
};

interface GaugeProps {
    value: number;
    formattedValue: string;
    formattedDelta: string;
    isPositive: boolean;
    primaryColor: string;
    min?: number;
    max?: number;
    width?: number;
    height?: number;
    startAngle?: number;
    endAngle?: number;
    innerRadius?: string;
    outerRadius?: string;
    animationDelay?: number;
}

export const Gauge = ({
    value,
    formattedValue,
    formattedDelta,
    isPositive,
    primaryColor,
    min = 0,
    max = 100,
    width = 300,
    height = 220,
    startAngle = -130,
    endAngle = 130,
    innerRadius = "85%",
    outerRadius = "90%",
    animationDelay = 0,
}: GaugeProps) => {
    return (
        <Box sx={styles.container(animationDelay)}>
            <MuiGauge
                width={width}
                height={height}
                value={value}
                valueMin={min}
                valueMax={max}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                sx={styles.gauge(primaryColor)}
            />
            <Typography sx={styles.value}>{formattedValue}</Typography>
            <Typography sx={styles.delta(isPositive)}>{formattedDelta}</Typography>
        </Box>
    );
};

