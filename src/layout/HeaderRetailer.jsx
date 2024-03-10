
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';

const drawerWidth = 180;

function HeaderRetailer() {
  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: 'white' }}
    >
        <Toolbar>
            <Typography variant="h6" noWrap component="div" sx={{ color: 'black', fontWeight: 'bold' }} >
                Retailer
            </Typography>
            <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                <Button component="a" href="/" variant="text">Login</Button>
                <IconButton component="a" href="/retailerAccount" >
                        <AccountCircleIcon    sx={{ color: 'black' }} />
                </IconButton>
            </Box>
        </Toolbar>

    </AppBar>
</Box>
  )
}

export default HeaderRetailer