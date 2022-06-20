import * as React from 'react';
import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import LogoutIcon from '@mui/icons-material/Logout';
import CoffeeIcon from '@mui/icons-material/Coffee';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext.js";
import Image2 from '../assets/blackCoffee.png';
import Image3 from '../assets/oliveBranch.png';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/saraigyg">
      Laboratoria - Burger Queen API
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

const theme = createTheme();

export default function LunchPage() {
  const navigate = useNavigate();


    const handleLogOut = async () => {
       await logOut()
       navigate('/signInPage');
    }

    const {user, logOut} = useAuth();
    console.log(user);

    const [customer, setCustomer] = useState({
      customerName:'',
  })

  const handleChange = ({target: {name, value}}) => 
    setCustomer({...customer, [name]: value})

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" sx={{ bgcolor: "#342D29"}} >
        <Toolbar >
          <img src={Image3} sx={{ mr: 2 }} alt='oliveBranch' />
          <Typography variant="h3" color="inherit" sx={{ mr: 2 }}>
            Burger Queen
          </Typography>
          <Typography variant="h5" align="right" sx={{ mr: 2 }} >
            Welcome {/* user.email */}
          </Typography>
          <Button variant="text" startIcon={<LogoutIcon/>} size="large"
          sx={{  fontWeight:'bold', '&:hover': { color: "#EAFCFA" }}} 
          onClick={handleLogOut}>Log Out</Button>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
          <TextField
                margin="normal"
                required
                fullWidth
                id="customerName"
                label="Customer's name"
                name="customerName"
                autoComplete="customerName"
                autoFocus
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
              />
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={4}
              justifyContent="center"
            >
            <Button component={Link} href="/breakfastPage"variant="outlined" startIcon={<CoffeeIcon/>} size="large"
              sx={{  fontWeight:'bold', color:'black', '&:hover': { bgcolor: "#1976d2", color:"whitesmoke" },
              '&:active':{bgcolor: "#1976d2", color:"whitesmoke"}}}>
                Breakfast</Button>
            <Button variant="outlined" startIcon={<FastfoodIcon/>} size="large"
              sx={{  fontWeight:'bold', color:'black', '&:hover': { bgcolor: "#1976d2", color:"whitesmoke" },
              '&:active':{bgcolor: "#1976d2", color:"whitesmoke"}}}>
                Lunch & Dinner</Button>
            </Stack>
            <Typography variant="h5" align="left" color="text.secondary" paragraph  sx={{ pt: 4 }}>
              Choose the food choices to place the order and send it to the kitchen:
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      bgcolor: "#342D29",
                      p: '15%',
                    }}
                    image={Image2}
                    alt="blackCoffee"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" >
                      Black Coffee
                    </Typography>
                    <Typography >
                      $5.00 
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center">
                    <Button size="small" sx={{ '&:hover': { bgcolor: "#E7F5F4" } }} >View</Button>
                    <Button size="small" sx={{ '&:hover': { bgcolor: "#E7F5F4" } }} >Remove</Button>
                  </Stack>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" size='large' sx={{ bgcolor:"#342D29"}}>Place Order</Button>
              
            </Stack>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Let's eat this burger together!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          For any questions or suggestions, please write to admin@test.com
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}