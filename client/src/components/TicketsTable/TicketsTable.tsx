import { useState } from "react";
import { useQuery } from "@apollo/client/react";
import { Box, Button, Typography, LinearProgress, useTheme, type Theme, Skeleton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { GET_TICKETS } from "@/graphql/queries/GetTickets";
import { useDashboardStore } from "@/state/dashboardStore";
import type { GetTicketsQuery, GetTicketsQueryVariables } from "@/types/graphql";
import jiraLogo from "@/assets/jiraLogo.svg";

const ownerMap: Record<string, string> = {
    "1": "Bruce Wayne",
    "2": "Jane Doe",
};

const createStyles = (theme: Theme) => ({
    container: {
        padding: { xs: "16px", sm: "24px", md: "32px" },
        width: "100%",
        background: "rgba(0, 0, 0, 0.3)",
        boxShadow: "0px 489px 196px rgba(0, 0, 0, 0.01), 0px 275px 165px rgba(0, 0, 0, 0.05), 0px 122px 122px rgba(0, 0, 0, 0.09), 0px 31px 67px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(12px)",
        borderRadius: { xs: "16px", sm: "20px", md: "24px" },
        boxSizing: "border-box",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: "24px",
    },
    titleSection: {
        display: "flex",
        flexDirection: "column",
    },
    title: {
        fontFamily: theme.typography.fontFamily || "'Mona Sans'",
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
        fontFamily: theme.typography.fontFamily || "'Instrument Sans'",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: { xs: "11px", sm: "11.5px", md: "12px" },
        lineHeight: "150%",
        color: "#F8F5DE",
        marginTop: "4px",
    },
    viewAllButton: {
        borderRadius: "2px",
        padding: "4px 24px",
        backgroundColor: "transparent",
        color: "#FFFFFF",
        textTransform: "none",
        fontFamily: theme.typography.fontFamily || "'Instrument Sans'",
        fontSize: "12px",
        fontWeight: 400,
        border: "0.5px solid #FFFFFF",
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            border: "1px solid #FFFFFF",
        },
    },
    healthBadge: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6px 12px",
        borderRadius: "6px",
        backgroundColor: "#fff",
        color: "#331f7c",
        fontFamily: theme.typography.fontFamily || "'Instrument Sans'",
        fontSize: "12px",
        fontWeight: 500,
        lineHeight: "1.2",
        minWidth: "60px",
    },
    healthCell: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100%",
        minHeight: "100%",
    },
    ticketCell: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },
    diamondIcon: {
        width: "14px",
        height: "14px",
    },
    criticalBadge: {
        color: "#FFFFFF",
        fontFamily: theme.typography.fontFamily || "'Instrument Sans'",
        fontSize: "12px",
        fontWeight: 600,
        marginRight: "4px",
    },
    ticketTitle: {
        color: "#FFFFFF",
        fontFamily: theme.typography.fontFamily || "'Instrument Sans'",
        fontSize: "12px",
        fontWeight: 400,
    },
    createdCell: {
        color: "#FFFFFF",
        fontFamily: theme.typography.fontFamily || "'Instrument Sans'",
        fontSize: "12px",
        fontWeight: 400,
    },
    ownerCell: {
        color: "#FFFFFF",
        fontFamily: theme.typography.fontFamily || "'Instrument Sans'",
        fontSize: "12px",
        fontWeight: 400,
    },
    progressContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
    },
    skeletonHeader: {
        backgroundColor: "#544182",
        borderRadius: "0",
        padding: "12px 16px",
        display: "flex",
        gap: "16px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    },
    skeletonRow: {
        display: "flex",
        gap: "16px",
        padding: "12px 16px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    },
    skeletonCell: {
        flex: 1,
    },
});

// Ideally these two methods would also be extracted to a utils file
const formatHealth = (health: number): string => {
    const sign = health >= 0 ? "+" : "";
    return `${sign}${health.toFixed(2)}`;
};

const formatCreatedAt = (createdAt: string): string => {
    const date = dayjs(createdAt);
    const now = dayjs();
    const diffInSeconds = now.diff(date, "second");

    if (diffInSeconds < 60) {
        return "Just now";
    }

    const diffInMinutes = now.diff(date, "minute");
    if (diffInMinutes < 60) {
        return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
    }

    const diffInHours = now.diff(date, "hour");
    if (diffInHours < 24) {
        return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
    }

    const diffInDays = now.diff(date, "day");
    if (diffInDays < 7) {
        return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
    }

    const diffInWeeks = now.diff(date, "week");
    return `${diffInWeeks} week${diffInWeeks > 1 ? "s" : ""} ago`;
};

const TicketsTable = () => {
    const theme = useTheme();
    const styles = createStyles(theme);
    const currentSpaceId = useDashboardStore((state) => state.currentSpaceId);
    const spaceId = currentSpaceId ?? "nasa-1";
    const [showAll, setShowAll] = useState(false);
    const [isExpanding, setIsExpanding] = useState(false);

    const { data: ticketsData, loading } = useQuery<GetTicketsQuery, GetTicketsQueryVariables>(
        GET_TICKETS, { variables: { spaceId } });

    const tickets = ticketsData?.tickets ?? [];
    const displayedTickets = showAll ? tickets : tickets.slice(0, 10);
    const totalTickets = tickets.length;

    const skeletonRows = Array.from({ length: 10 }, (_, index) => index);

    const handleViewAllClick = () => {
        setIsExpanding(true);
        setShowAll(!showAll);
        setTimeout(() => {
            setIsExpanding(false);
        }, 300);
    };

    const isLoading = loading || isExpanding;

    const columns: GridColDef[] = [
        {
            field: "health",
            headerName: "HEALTH",
            width: 120,
            sortable: true,
            renderCell: (params: GridRenderCellParams) => (
                <Box sx={styles.healthCell}>
                    <Box sx={styles.healthBadge}>
                        {formatHealth(params.value)}
                    </Box>
                </Box>
            ),
        },
        {
            field: "title",
            headerName: "TICKET",
            flex: 1,
            minWidth: 300,
            renderCell: (params: GridRenderCellParams) => (
                <Box sx={styles.ticketCell}>
                    <Box
                        component="img"
                        src={jiraLogo}
                        alt=""
                        sx={styles.diamondIcon}
                    />
                    <Typography component="span" sx={styles.criticalBadge}>
                        [CRITICAL]
                    </Typography>
                    <Typography component="span" sx={styles.ticketTitle}>
                        {params.value}
                    </Typography>
                </Box>
            ),
        },
        {
            field: "createdAt",
            headerName: "CREATED",
            width: 150,
            renderCell: (params: GridRenderCellParams) => (
                <Typography sx={styles.createdCell}>
                    {formatCreatedAt(params.value)}
                </Typography>
            ),
        },
        {
            field: "ownerId",
            headerName: "OWNER",
            width: 150,
            renderCell: (params: GridRenderCellParams) => (
                <Typography sx={styles.ownerCell}>
                    {ownerMap[params.value] || `User ${params.value}`}
                </Typography>
            ),
        },
        {
            field: "progress",
            headerName: "PROGRESS",
            width: 200,
            renderCell: (params: GridRenderCellParams) => (
                <Box sx={styles.progressContainer}>
                    <LinearProgress
                        variant="determinate"
                        value={params.value}
                        sx={{
                            flex: 1,
                        }}
                    />
                </Box>
            ),
        },
    ];

    return (
        <Box sx={styles.container}>
            <Box sx={styles.header}>
                <Box sx={styles.titleSection}>
                    <Typography sx={styles.title}>TOP REMEDIATION STEPS</Typography>
                    <Typography sx={styles.subtitle}>
                        Tickets created for addressing findings and risk reduction.
                    </Typography>
                </Box>
                {totalTickets > 10 && (
                    <Button
                        sx={styles.viewAllButton}
                        onClick={handleViewAllClick}
                    >
                        {showAll ? `Show less` : `View all ${totalTickets}`}
                    </Button>
                )}
            </Box>
            {isLoading ? (
                <Box>
                    <Box sx={styles.skeletonHeader}>
                        <Skeleton variant="rectangular" width={120} height={20} sx={{ borderRadius: "4px" }} />
                        <Skeleton variant="rectangular" width="100%" height={20} sx={{ borderRadius: "4px" }} />
                        <Skeleton variant="rectangular" width={150} height={20} sx={{ borderRadius: "4px" }} />
                        <Skeleton variant="rectangular" width={150} height={20} sx={{ borderRadius: "4px" }} />
                        <Skeleton variant="rectangular" width={200} height={20} sx={{ borderRadius: "4px" }} />
                    </Box>
                    {skeletonRows.map((index) => (
                        <Box
                            key={index}
                            sx={{
                                ...styles.skeletonRow,
                                backgroundColor: index % 2 === 0 ? "#2e1b57" : "#392664",
                            }}
                        >
                            <Box sx={{ width: 120 }}>
                                <Skeleton variant="rectangular" width={60} height={24} sx={{ borderRadius: "6px" }} />
                            </Box>
                            <Box sx={{ flex: 1, display: "flex", alignItems: "center", gap: "8px" }}>
                                <Skeleton variant="rectangular" width={14} height={14} sx={{ borderRadius: "2px" }} />
                                <Skeleton variant="text" width={80} height={16} />
                                <Skeleton variant="text" width="60%" height={16} />
                            </Box>
                            <Box sx={{ width: 150 }}>
                                <Skeleton variant="text" width={100} height={16} />
                            </Box>
                            <Box sx={{ width: 150 }}>
                                <Skeleton variant="text" width={100} height={16} />
                            </Box>
                            <Box sx={{ width: 200 }}>
                                <Skeleton variant="rectangular" width="100%" height={8} sx={{ borderRadius: "4px" }} />
                            </Box>
                        </Box>
                    ))}
                </Box>
            ) : (
                <DataGrid
                    rows={displayedTickets}
                    columns={columns}
                    disableRowSelectionOnClick
                    hideFooter
                    disableColumnMenu
                    getRowClassName={(params) =>
                        params.indexRelativeToCurrentPage % 2 === 0 ? "even-row" : "odd-row"
                    }
                />
            )}
        </Box>
    );
};

export default TicketsTable;

