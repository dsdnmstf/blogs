import React, { useEffect, useState } from "react";
import { Login } from "../components/Headers";
import { Container, Box, Grid, TextField, Button } from "@mui/material";
import Image from "../assets/blok.7e6674a5.png";
import { loginWithEmail, loginWithGoogle } from "../firebase/firebase";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { failedNote, succesNote } from "../toastify/Toastify";

const LoginPage = () => {
  const { state } = useLocation();
  console.log(state);
  const currentUser = useSelector((state) => state.firebase.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    state && failedNote("Please sign in!");
  }, [state]);
  useEffect(() => {
    const successNavigate = () => {
      navigate("/");
      succesNote("Login succesfully performed");
    };
    currentUser && successNavigate();
  }, [currentUser, navigate]);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  // const { name, value } = e.target

  const handleGoogleLogin = () => {
    loginWithGoogle(dispatch);
  };
  const handleLogin = async () => {
    await loginWithEmail(formdata.email, formdata.password, dispatch);
  };
  return (
    <div>
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
        <Login />

        <Box compenet="form">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="Email"
                name="email"
                label="Email"
                type="email"
                value={formdata.email}
                autoComplete="current-password"
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
                value={formdata.password}
                autoComplete="current-password"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: "15px" }}>
            <Button
              onClick={handleLogin}
              type="submit"
              variant="contained"
              fullWidth
            >
              LOGIN
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ mt: "15px" }}>
            <Button
              onClick={handleGoogleLogin}
              type="submit"
              variant="contained"
              fullWidth
            >
              Continou with Google
            </Button>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default LoginPage;
