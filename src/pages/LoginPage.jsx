import React from 'react'
import { Login } from '../components/Headers'
import MenuAppBar from '../components/MenuAppbar'
import { Container, Box,  Typography, Grid, TextField, Button } from "@mui/material";
import Image from "../assets/blok.7e6674a5.png";



const LoginPage = () => {
  return (
    <div>
      <MenuAppBar />
      <Login />
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        
          <Box
            component="img"
            sx={{ mt: "2rem" }}
            alt="The house from the offer."
            src={Image}
          />
        

        <Typography variant="h3" component="h3">
          Login
        </Typography>
        <Box compenet="form">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="Email"
                label="Email"
                type="email"
                autoComplete="current-password"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: "15px" }}>
            <Button type="submit" variant="contained" fullWidth>
              LOGIN
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ mt: "15px" }}>
            <Button type="submit" variant="contained" fullWidth>
              Continou with Google
            </Button>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default LoginPage