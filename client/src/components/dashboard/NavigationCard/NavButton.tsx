import { Button, Typography } from "@mui/material";

export const styles = {
    navButton: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        p: "8px 16px",
        gap: "10px",
        borderRadius: "8px",
        justifyContent: "space-between",
    },
    navButtonHover: {
        "&:hover": { background: "rgba(255, 255, 255, 0.05)" },
    },
    navButtonActive: {
        background: "rgba(248, 245, 222, 0.2)",
        opacity: 0.8,
    },
    navButtonText: {
        flex: 1,
        textAlign: "left",
    },
    navItem: {
        fontWeight: 600,
        fontSize: "15px",
        lineHeight: "200%",
        letterSpacing: "0.06em",
        color: "primary.contrastText",
    },
};
interface NavButtonProps {
    children: React.ReactNode;
    isActive?: boolean;
    onClick?: () => void;
}

const NavButton = ({
    children,
    isActive = false,
    onClick
}: NavButtonProps) => {
    const buttonStyles = isActive
        ? { ...styles.navButton, ...styles.navButtonActive }
        : { ...styles.navButton, ...styles.navButtonHover };

    return (
        <Button sx={buttonStyles} onClick={onClick}>
            <Typography sx={{ ...styles.navItem, ...styles.navButtonText }}>
                {children}
            </Typography>
        </Button>
    );
};

export default NavButton;