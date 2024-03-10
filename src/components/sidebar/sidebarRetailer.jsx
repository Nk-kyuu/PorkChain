import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

const drawerWidth = 180;

function sidebarRetailer() {


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#1058C5',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="h5" noWrap component="div" sx={{ color: 'white', fontWeight: "bold" }} >
            PorkChain
          </Typography>
        </Toolbar>
        <List sx={{ color: 'white' }} >
          <ListItem disablePadding >
            <ListItemButton component="a" href="/retailerDashboard">
              <ListItemIcon sx={{ color: 'white' }}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/pork">
              <ListItemIcon sx={{ color: 'white' }} >
                <LibraryAddIcon />
              </ListItemIcon>
              <ListItemText primary="Pork" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>

  );
}

export default sidebarRetailer