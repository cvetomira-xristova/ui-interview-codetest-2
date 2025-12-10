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
    paddingY: "24px",
    minHeight: "100vh",
  },
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh"
  },
};

export function DashboardLayout() {
  const { data, loading } = useQuery<GetUserQuery>(GET_USER);
  const user = data?.user;

  if (loading) {
    return (
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.loaderContainer}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={styles.container}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <NavigationCard user={user} />
            <SpaceSwitcher user={user} />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>
          <Dashboard />
        </Grid>
      </Grid>
    </Container>
  );
}
