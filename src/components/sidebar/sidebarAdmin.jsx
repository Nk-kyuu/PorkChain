import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const drawerWidth = 240;

function SidebarAdmin() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box',backgroundColor: '#1058C5' },
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap sx={{ color: 'white' }}>
                        Porkchain
                    </Typography>
                </Toolbar>

                <Box sx={{ overflow: 'auto' }}>
                    <List>
                    <ListItemButton component={Link} to="/adminDashboard" key="Dashboard" disablePadding>
                            <ListItemIcon>
                                <LeaderboardIcon sx={{ color: 'white' }}/>
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" sx={{ color: 'white' }}/>
                        </ListItemButton>
                        <ListItemButton component={Link} to="/adminAddUser" key="User" disablePadding>
                            <ListItemIcon>
                                <PeopleAltIcon sx={{ color: 'white' }}/>
                            </ListItemIcon>
                            <ListItemText primary="User" sx={{ color: 'white' }}/>
                        </ListItemButton>
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

            </Box>
        </Box>
    );
}

export default SidebarAdmin;
