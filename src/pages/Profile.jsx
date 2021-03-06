import { Avatar, Card, Container, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const currentUser = useSelector((state) => state.firebase.currentUser);
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        mt: "2rem",
      }}
    >
      <Card
        maxwidth="md"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
          width: "50%",
        }}
      >
        <Avatar
          sx={{ bgcolor: "orange" }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        >
          {currentUser.displayName?.charAt(0) ?? "U"}
        </Avatar>
        <Typography>Display Name</Typography>
        <Typography>{currentUser?.displayName ?? "No Display Name"}</Typography>
        <Typography>Email</Typography>
        <Typography>{currentUser.email}</Typography>
      </Card>
    </Container>
  );
};

export default Profile;
