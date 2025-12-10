import Grid from "@mui/material/Grid";
import Header from "./Header";
import RecommendationsCard from "./RecommendationsCard/RecommendationsCard";
import Metrics from "./Metrics/Metrics";
import TicketsTable from "./TicketsTable";

const Dashboard = () => {
    return (
        <Grid container spacing={{ xs: 2, sm: 3 }}>
            <Grid size={{ xs: 12 }}>
                <Header />
            </Grid>
            <Grid size={{ xs: 12 }}>
                <RecommendationsCard />
            </Grid>
            <Grid size={{ xs: 12 }}>
                <Metrics />
            </Grid>
            <Grid size={{ xs: 12 }}>
                <TicketsTable />
            </Grid>
        </Grid>
    );
};

export default Dashboard;