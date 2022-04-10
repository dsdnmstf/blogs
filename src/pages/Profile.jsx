import {
  Avatar,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import MenuAppBar from "../components/MenuAppbar";

const Profile = () => {
  return (
    <>
      <MenuAppBar />
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          
        }}
      >
        <Card
          maxWidth="md"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "1rem",
            width:"50%"
          }}
        >
          <Avatar
            sx={{ bgcolor: "orange" }}
            alt="Remy Sharp"
            src="/broken-image.jpg"
          >
            B
          </Avatar>
          <Typography>Display Name</Typography>
          <Typography>MF</Typography>
          <Typography>Email</Typography>
          <Typography>dsdnmstf@gmail.com</Typography>
        </Card>
      </Container>
    </>
  );
};

export default Profile;
