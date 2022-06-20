import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from '../assets/bq.png';
import Image3 from '../assets/oliveBranch.png';
import { useAuth } from "../context/authContext.js";
import { useNavigate } from "react-router-dom"; 
import { useState } from "react";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/saraigyg">
      Laboratoria - Burger Queen API
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {

  const [user, setUser] = useState({
    email:'',
    password:'',
})

const {logIn} = useAuth();

const navigate = useNavigate();  

const [error, setError] = useState();

const handleChange = ({target: {name, value}}) => 
    setUser({...user, [name]: value})

    {/* to submit the login form with error messages*/}
const handleSubmitError = async (e) => {
    e.preventDefault()
    setError('');
    try {
       await logIn(user.email, user.password);
        navigate("/breakfastPage");
    }
    catch (error) {
        console.log(error.code);
        if (error.code === 'auth/user-not-found') {
            setError("Error: User not found.")
        }
        else if (error.code === 'auth/invalid-email') {
            setError("Error: Invalid email.")
        }
        else if (error.code === 'auth/wrong-password') {
            setError("Error: Wrong password.")
        }
    }
}
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${Image})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
          {/*<Toolbar>
          <img src={Image3} sx={{ width:20, height:20 }} alt="oliveBranch"  />
        </Toolbar>*/}
          <Typography
           gutterBottom
           variant="h1"
          sx= {{
            position: 'absolute',
            color: 'whitesmoke',
            mt: 10,
            ml: 15,
          }}>
          Burger Queen
        </Typography>
        <Typography
           gutterBottom
           variant="h2"
          sx= {{
            position: 'absolute',
            color: 'whitesmoke',
            mt: 50,
            mx: 4,
          }} >
          Let's eat this <br></br>burger together!
        </Typography>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#424242' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
              {error && <p style={{ color: '#f44336' }}>{error}</p> }
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: '#424242' }}
                onClick={handleSubmitError}
              >
                Sign In
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}