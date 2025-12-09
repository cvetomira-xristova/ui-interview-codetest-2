import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import NavigationCard from '../dashboard/NavigationCard';
import SpaceSwitcher from '../dashboard/SpaceSwitcher';
import Dashboard from '../dashboard/Dashboard';

export function DashboardLayout() {
  return (
    <Container maxWidth="xl" sx={{ paddingTop: "24px", paddingBottom: "24px", minHeight: '100vh' }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 3 }}>
          <NavigationCard />
          <SpaceSwitcher />
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>
          <Dashboard />
        </Grid>
      </Grid>
    </Container>
  );
}
