import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import NavigationCard from '../dashboard/NavigationCard';
import SpaceSwitcher from '../dashboard/SpaceSwitcher';
import Dashboard from '../dashboard/Dashboard';

const StyledContainer = styled(Container)`
  padding-top: 24px;
  padding-bottom: 24px;
  min-height: 100vh;
`;

export function DashboardLayout() {
  return (
    <StyledContainer maxWidth="xl">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 3 }}>
          <NavigationCard />
          <SpaceSwitcher />
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>
          <Dashboard />
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
