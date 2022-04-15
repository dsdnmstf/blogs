import React from "react";
import { Formik } from "formik";
import { Register } from "../components/Headers";
import Image from "../assets/blok.7e6674a5.png";
import { Avatar, Box, Container, Link, Typography } from "@mui/material";
import RegisterForm from "../components/RegisterForm";
import { RegisterValidationSchema } from "../components/RegisterFormValidation";
const RegisterPage = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{ mt: "2rem" }}
          alt="The house from the offer."
          src={Image}
        />

        <Register />

        <Formik
          initialValues={{
            email: "",
            password: "",
            passwordConfirm: "",
          }}
          validationSchema={RegisterValidationSchema}
          onSubmit={(values, actions) => {
            alert(`firstName: ${values.firstName}
            lastName: ${values.lastName}
             email: ${values.email}
             password: ${values.password}
            `);
            actions.resetForm();
            actions.setSubmitting(false);
          }}
          component={(props) => <RegisterForm {...props} />}
        ></Formik>

        <Typography color="gray" align="center" variant="body2" sx={{ mt: 4 }}>
          Copyright ©<Link href="#"> Mustafa</Link>
          {new Date().getFullYear()}
        </Typography>
      </Box>
    </Container>
  );
};

export default RegisterPage;
