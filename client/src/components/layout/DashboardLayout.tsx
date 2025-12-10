import { Container, Box, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useQuery } from "@apollo/client/react";
import SpaceSwitcher from '../dashboard/SpaceSwitcher/SpaceSwitcher';
import Dashboard from '../dashboard/Dashboard';
import { GET_USER } from "@/graphql/queries/GetUser";
import type { GetUserQuery } from "@/types/graphql";
import NavigationCard from '../dashboard/NavigationCard/NavigationCard';

const styles = {
  container: {
    paddingY: { xs: "16px", sm: "20px", md: "40px" },
    paddingX: { xs: "16px", sm: "20px", md: "40px" },
  },
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export function DashboardLayout() {
  const { data } = useQuery<GetUserQuery>(GET_USER);
  const user = data?.user;

  return (
    <Container maxWidth="xl" sx={styles.container}>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        <Grid size={{ xs: 12, sm: 12, md: 3, lg: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 1.5, sm: 2, md: 2 } }}>
            <NavigationCard user={user} />
            <SpaceSwitcher user={user} />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 9, lg: 10 }}>
          <Dashboard />
        </Grid>
      </Grid>
    </Container>
  );
}
