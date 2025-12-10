import { Box, Typography } from "@mui/material";

const styles = {
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
        "&:hover": {
            background: "rgba(255, 255, 255, 0.05)",
            cursor: "pointer"
        },

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
};

interface RecommendationItemProps {
    text: string;
    isPrimary?: boolean;
    badge?: string;
}

export const RecommendationItem = ({ text, isPrimary = false, badge }: RecommendationItemProps) => {
    const itemStyle = isPrimary
        ? styles.actionItemPrimary
        : styles.actionItemSecondary;

    const textStyle = isPrimary
        ? styles.actionTextPrimary
        : styles.actionTextSecondary;

    return (
        <Box sx={itemStyle}>
            <Typography sx={textStyle}>
                {text}
            </Typography>
            {badge && (
                <Typography sx={styles.fixBadge}>{badge}</Typography>
            )}
        </Box>
    );
};

