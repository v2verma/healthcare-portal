import { useState } from 'react'
import { 
  Typography, Container, Grid2, Card, CardContent,Avatar
} from "@mui/material";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HotelIcon from "@mui/icons-material/Hotel";

function PatientDashboard() {

  return (
    <Container maxWidth="md" sx={{ mt: 4, transition: "margin 0.3s ease-in-out"}}>
        
          <Grid2 container spacing={3}>
            <Grid2 item xs={12} sm={6} md={4}>
              <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
                <Avatar sx={{ bgcolor: "#1976d2", mr: 2 }}>
                  <DirectionsWalkIcon />
                </Avatar>
                <CardContent>
                  <Typography variant="h6">Steps</Typography>
                  <Typography variant="h5">7,500</Typography>
                </CardContent>
              </Card>
            </Grid2>

            <Grid2 item xs={12} sm={6} md={4}>
              <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
                <Avatar sx={{ bgcolor: "#ff9800", mr: 2 }}>
                  <AccessTimeIcon />
                </Avatar>
                <CardContent>
                  <Typography variant="h6">Active Time</Typography>
                  <Typography variant="h5">45 mins</Typography>
                </CardContent>
              </Card>
            </Grid2>

            <Grid2 item xs={12} sm={6} md={4}>
              <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
                <Avatar sx={{ bgcolor: "#4caf50", mr: 2 }}>
                  <HotelIcon />
                </Avatar>
                <CardContent>
                  <Typography variant="h6">Sleep</Typography>
                  <Typography variant="h5">7h 30m</Typography>
                </CardContent>
              </Card>
            </Grid2>
          </Grid2>
        
      </Container>
  )
}

export default PatientDashboard
