import { useState } from "react";
import {
    Box,
    Card,
    Button,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDashboardStore } from "@/state/dashboardStore";
import { spaceSwitcherStyles } from "./SpaceSwitcher.styles";
import type { GetUserQuery } from "@/types/graphql";

export interface SpaceSwitcherProps {
    user: GetUserQuery['user'] | undefined;
}

const SpaceSwitcher = ({ user }: SpaceSwitcherProps) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const currentSpaceId = useDashboardStore((state) => state.currentSpaceId);
    const setSpace = useDashboardStore((state) => state.setSpace);
    const spaces = user?.spaces || [];
    const currentSpace = spaces.find((space) => space.id === currentSpaceId) || spaces[0];

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSpaceSelect = (spaceId: string) => {
        setSpace(spaceId);
        handleClose();
    };

    return (
        <Card sx={spaceSwitcherStyles.card}>
            <Button fullWidth onClick={handleClick} sx={spaceSwitcherStyles.button}>
                <Box sx={spaceSwitcherStyles.buttonContent}>
                    {currentSpace?.avatar && (
                        <Box
                            component="img"
                            src={currentSpace.avatar}
                            alt={currentSpace.name}
                            sx={spaceSwitcherStyles.spaceAvatar}
                        />
                    )}
                    <Typography sx={{ ...spaceSwitcherStyles.spaceName }}>
                        {currentSpace?.name || "Select Space"}
                    </Typography>
                </Box>
                <KeyboardArrowDownIcon sx={spaceSwitcherStyles.arrowIcon} />
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{ sx: { ...spaceSwitcherStyles.menu, background: theme.palette.primary.dark } }}
            >
                {spaces.map((space) => (
                    <MenuItem
                        key={space.id}
                        onClick={() => handleSpaceSelect(space.id)}
                        selected={space.id === currentSpaceId}
                        sx={spaceSwitcherStyles.menuItem}
                    >
                        <ListItemIcon sx={spaceSwitcherStyles.menuItemIcon}>
                            <Box
                                component="img"
                                src={space.avatar}
                                alt={space.name}
                                sx={spaceSwitcherStyles.menuItemAvatar}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary={space.name}
                            primaryTypographyProps={{
                                sx: { ...spaceSwitcherStyles.spaceName, fontSize: "12px", fontWeight: space.id === currentSpaceId ? 600 : 400 },
                            }}
                        />
                    </MenuItem>
                ))}
            </Menu>
        </Card>
    );
};

export default SpaceSwitcher;
