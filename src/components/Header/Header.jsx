import React, { useState } from "react";
import { 
  AppBar, Toolbar, IconButton, Typography,
  Box, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 250;

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("Dashboard"); // Default section

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const toggleSidebar = (open) => () => {
    setSidebarOpen(open);
  };

  const handleSectionChange = (section) => {
    setSelectedSection(section);
    setSidebarOpen(false);
  };

  return (
    <>
      <AppBar 
        position="static" 
        sx={{
          width: sidebarOpen ? `calc(100% - ${drawerWidth}px)` : "100%",
          marginLeft: sidebarOpen ? `${drawerWidth}px` : 0,
          transition: "margin 0.3s ease-in-out, width 0.3s ease-in-out"
        }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Health & Wellness Dashboard
          </Typography>
          <Button color="inherit" startIcon={<LoginIcon />} onClick={handleLogin}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={sidebarOpen} onClose={toggleSidebar(false)}>
        <Box sx={{ width: drawerWidth }} role="presentation">
          <Box sx={{ bgcolor: "primary.main", color: "white", p: 2, textAlign: "center" }}>
            <Typography variant="h6">Welcome, User!</Typography>
          </Box>
          <Divider />

          <List>
            {[
              { text: "Dashboard", icon: <DashboardIcon color="primary" /> },
              { text: "My Profile", icon: <AccountCircleIcon color="secondary" /> },
              { text: "Wellness Goals", icon: <FitnessCenterIcon color="success" /> },
              { text: "Messages", icon: <MailIcon color="error" /> },
            ].map((item) => (
              <ListItem 
                button 
                key={item.text} 
                selected={selectedSection === item.text}
                onClick={() => handleSectionChange(item.text)}
                sx={{
                  bgcolor: selectedSection === item.text ? "#e0e0e0" : "transparent",
                  "&.Mui-selected": { bgcolor: "#1976d2", color: "white" },
                  "&.Mui-selected:hover": { bgcolor: "#1565c0" }
                }}
              >
                <ListItemIcon sx={{ color: selectedSection === item.text ? "white" : "inherit" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
