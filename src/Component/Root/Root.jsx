
import React from "react";
import { Outlet } from "react-router-dom";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { extendTheme } from "@mui/material/styles";
import DashboardIcon from '@mui/icons-material/Dashboard';
import {
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Tooltip,
  TextField,
  InputAdornment,
 
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
 import LoginIcon from "@mui/icons-material/Login";
 import PersonAddIcon from "@mui/icons-material/PersonAdd";
 import { Link } from "react-router-dom";
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import SmsIcon from '@mui/icons-material/Sms';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CallIcon from '@mui/icons-material/Call';
const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});


const NAVIGATION = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    segment: "home",
    title: "Home",
    icon: <HomeIcon />,
    link: "/", 
  },
  {
    segment: 'navbar',
    title: 'Messages',
    icon: <SmsIcon />,
    link: "/navbar",
  },
  {
    segment: 'task',
    title: 'Tasks',
    icon: <AssignmentTurnedInIcon />,
  },
  {
    segment: 'calls',
    title: 'Calls',
    icon: <CallIcon />,
  },
];

export default function Root() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: (
          <Avatar
            src="https://mui.com/static/logo.png"
            alt="MUI logo"
            sx={{ width: 40, height: 40 }}
          />
        ),
        title: (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            px={2}
          
          >
           
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              sx={{ width: "100%", maxWidth: 500 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

      
            <Box display="flex" alignItems="center" gap={1}>
            <Tooltip title="Login">
                <IconButton component={Link} to="/login" color="primary">
                  <LoginIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Register">
              <IconButton component={Link} to="/reg" color="primary">
                  <PersonAddIcon />
                </IconButton>
              </Tooltip>

            
             
             
            </Box>
          </Box>
        ),
      }}
      theme={demoTheme}
    >
      <DashboardLayout>
        <Box
          sx={{
            padding: 2,
            borderRadius: 1,
            bgcolor: "background.paper",
            minHeight: "100vh",
          }}
        >
          <Outlet />
        </Box>
      </DashboardLayout>
    </AppProvider>
  );
}


