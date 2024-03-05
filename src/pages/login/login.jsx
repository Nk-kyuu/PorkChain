import './login.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../../assets/logo.png'
import { useState } from 'react';

const Login = () => {
    const defaultTheme = createTheme();
    const [role, setRole] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
            role: role,
        });
        switch (role) {
            case 'slaughter':
                window.location = '/slaughterDashboard';
                break;
            case 'farmer':
                window.location = '/farmerDashboard';
                break;
            case 'retailer':
                window.location = '/retailerDashboard';
                break;
            case 'admin':
                window.location = '/adminDashboard';
                break;
        // Add more cases for other roles as needed
            default:
            // Handle default case or invalid role
            break;
        }
    };
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs" >
                <CssBaseline />
                {/* <div style={{ position: 'absolute', top: 0, right: '200px', margin: '20px' }}>
                    <Button
                        type="submit"
                        variant="contained"
                        color='warning'
                        sx={{ mt: 3, mb: 2 }}
                        href='/home'
                    >
                        For consumer
                    </Button>
                </div> */}
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar> */}
                    <img src={logo} />
                    {/* <Typography component="h1" variant="h5">
                        Login
                    </Typography> */}
                    <br></br>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            InputProps={{
                                style: {
                                    borderRadius: '15px',
                                },
                            }}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            InputProps={{
                                style: {
                                    borderRadius: '15px',
                                },
                            }}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            select
                            fullWidth
                            required
                            label="Role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            SelectProps={{
                                native: true,
                            }}
                            InputProps={{
                                style: {
                                    borderRadius: '15px',
                                },
                            }}
                            margin="normal"
                        >
                            <option value=""></option>
                            <option value="admin">Admin</option>
                            <option value="farmer">Farmer</option>
                            <option value="slaughter">Slaughter</option>
                            <option value="retailer">Retailer</option>
                            {/* Add more options for other roles if needed */}
                        </TextField>
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Login;