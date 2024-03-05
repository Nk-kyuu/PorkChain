import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { AccountCircle } from '@mui/icons-material';

function Adminappbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar sx={{backgroundColor: 'white'}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Porkchain
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 7, color: 'black'}}>
            Admin
          </Typography>
          <Button color="inherit" href='/' sx={{ color: 'black' }}>Logout</Button>
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle sx={{ color: 'black' }}/>
              </IconButton>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Adminappbar;