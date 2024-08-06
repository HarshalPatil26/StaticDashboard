import { Box, Grid, Paper, Typography } from "@mui/material";
import ActivityChart from "./ActivityChart";
import Orders from "./Orders";
import Feedback from "./Feedback";
import Goals from "./Goals";

// import "./Styles.css";

const Dashboard = () => {
  return (
    <div className="div-container">
      <h1>Dashboard</h1>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2} style={{width:"100%"}}>
              <Grid item xs={12} md={3}>
                <Paper
                  sx={{ padding: 2, backgroundColor: "#2c2c38", color: "#fff" }}
                >
                  <Typography>Total Orders</Typography>
                  <Typography variant="h5">75</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper
                  sx={{ padding: 2, backgroundColor: "#2c2c38", color: "#fff" }}
                >
                  <Typography>Total Delivered</Typography>
                  <Typography variant="h5">70</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper
                  sx={{ padding: 2, backgroundColor: "#2c2c38", color: "#fff" }}
                >
                  <Typography>Total Cancelled</Typography>
                  <Typography variant="h5">5</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper
                  sx={{ padding: 2, backgroundColor: "#2c2c38", color: "#fff" }}
                >
                  <Typography>Total Revenue</Typography>
                  <Typography variant="h5">$12k</Typography>
                </Paper>
              </Grid>
            </Grid>
            <Paper
              sx={{
                padding: 2,
                backgroundColor: "#2c2c38",
                color: "#fff",
                marginTop: 2,
              }}
            >
              <Typography>Activity</Typography>
              <ActivityChart />
            </Paper>
            <Paper
              sx={{
                padding: 2,
                backgroundColor: "#2c2c38",
                color: "#fff",
                marginTop: 2,
              }}
            >
              <Typography>Recent Orders</Typography>
              <Orders />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{ padding: 1.3, backgroundColor: "#2c2c38", color: "#fff"}}
            >
              <Typography>Net Profit</Typography>
              <Typography variant="h4">$6759.25</Typography>
            </Paper>
            <Paper
              sx={{
                padding: 2,
                backgroundColor: "#2c2c38",
                color: "#fff",
                marginTop: 2,
              }}
            >
              <Goals />
            </Paper>
            <Paper
              sx={{
                padding: 2,
                backgroundColor: "#2c2c38",
                color: "#fff",
                marginTop: 2,
              }}
            >
              <Typography></Typography>
              <Feedback />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Dashboard;
