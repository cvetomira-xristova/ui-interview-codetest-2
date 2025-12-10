import { Box, Card } from "@mui/material";
import { Logo } from "./Logo";
import { TeamsSection } from "./TeamsSection";
import { UserAvatar } from "./UserAvatar";
import NavButton from './NavButton';
import type { GetUserQuery } from '@/types/graphql';

const styles = {
    card: {
        p: "16px 24px",
        width: "240px",
        background: "rgba(0, 0, 0, 0.5)",
        boxShadow: "0px 16px 16px rgba(0, 0, 0, 0.08), inset 1px 1px 2px rgba(255, 255, 255, 0.32)",
        backdropFilter: "blur(12px)",
        borderRadius: "24px",
        height: "85vh",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
    },
    navItemsWrapper: {
        position: "absolute",
        top: "40%",
        left: 0,
        right: 0,
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
    },
    navItems: {
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        maxWidth: "189px",
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