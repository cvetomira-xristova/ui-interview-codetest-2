import { Box, Card } from "@mui/material";
import { Logo } from "./Logo";
import { TeamsSection } from "./TeamsSection";
import { UserAvatar } from "./UserAvatar";
import NavButton from './NavButton';
import type { GetUserQuery } from '@/types/graphql';

const styles = {
    card: {
        p: { xs: "12px 16px", sm: "16px 20px", md: "16px 24px" },
        width: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        boxShadow: "0px 16px 16px rgba(0, 0, 0, 0.08), inset 1px 1px 2px rgba(255, 255, 255, 0.32)",
        backdropFilter: "blur(12px)",
        borderRadius: "24px",
        minHeight: { xs: "auto", md: "80vh" },
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        zIndex: 1,
    },
    navItemsWrapper: {
        position: { xs: "static", md: "absolute" },
        top: { md: "40%" },
        left: { md: 0 },
        right: { md: 0 },
        transform: { md: "translateY(-50%)" },
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        my: { xs: 2, md: 0 },
    },
    navItems: {
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        maxWidth: { xs: "100%", md: "189px" },
        alignItems: "stretch",
        position: "relative",
    },
};

interface NavigationCardProps {
    user: GetUserQuery['user'] | undefined;
}

const NavigationCard = ({ user }: NavigationCardProps) => {
    return (
        <Card sx={styles.card}>
            <Logo />
            <Box>
                <Box sx={styles.navItemsWrapper}>
                    <Box sx={styles.navItems}>
                        <NavButton isActive>Home</NavButton>
                        <NavButton>Tasks</NavButton>
                        <TeamsSection />
                    </Box>
                </Box>
            </Box>

            <UserAvatar user={user} />
        </Card >
    );
};

export default NavigationCard;