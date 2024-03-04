import './register.css';
import { Button,TextField,Avatar,CssBaseline,FormControlLabel,
Link,Grid,Box,Typography,Container,MenuItem,Checkbox} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';



const register = () => {
    const defaultTheme = createTheme();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
      const currencies = [
        {
          value: 'FM',
          label: 'Farmer',
        },
        {
          value: 'SH',
          label: 'Slaughterhouse',
        },
        {
          value: 'RT',
          label: 'Retailer',
        },
        {
          value: 'AM',
          label: 'Admin',
        },
      ];

    return (
        <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2} >
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="username"                   
                    fullWidth
                    id="username"
                    label="Username"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Role"
                        defaultValue="FM"
                        helperText="Please select your role">
                        {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="firstname"
                    label="Firstname"
                    name="firstname"
                    autoComplete="firstname"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="lastname"
                    label="Lastname"
                    name="lastname"
                    autoComplete="lastname"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    autoComplete="address"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    autoComplete="password"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="companyname"
                    label="Companyname"
                    name="companyname"
                    autoComplete="companyname"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="phone"
                    label="Phone"
                    name="phone"
                    autoComplete="phone"
                  />
                </Grid>              
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>              
            </Box>
          </Box>
          
        </Container>
      </ThemeProvider>
        
    );
}


export default register;