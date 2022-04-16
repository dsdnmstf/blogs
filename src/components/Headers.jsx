import React from "react";
import { Box, Typography } from "@mui/material";
export const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        m: "3rem",
      }}
    >
      <Box
        sx={{
          width: "10rem",
          height: "0.3rem",
          backgroundColor: "rgb(4, 101, 130)",
        }}
      />
      <Typography variant="h2" component="h2" color="rgb(4, 101, 130)">
        Dashboard
      </Typography>
      <Box
        sx={{
          width: "10rem",
          height: "0.3rem",
          backgroundColor: "rgb(4, 101, 130)",
        }}
      />
    </Box>
  );
};

export const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        m: "3rem",
      }}
    >
      <Box
        sx={{
          width: "3rem",
          height: "0.15rem",
          backgroundColor: "rgb(4, 101, 130)",
        }}
      />
      <Typography variant="h5" component="h2" color="rgb(4, 101, 130)">
        Login
      </Typography>
      <Box
        sx={{
          width: "3rem",
          height: "0.15rem",
          backgroundColor: "rgb(4, 101, 130)",
        }}
      />
    </Box>
  );
};

export const Register = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        m: "3rem",
      }}
    >
      <Box
        sx={{
          width: "3rem",
          height: "0.15rem",
          backgroundColor: "rgb(4, 101, 130)",
        }}
      />
      <Typography variant="h5" component="h2" color="rgb(4, 101, 130)">
        Register
      </Typography>
      <Box
        sx={{
          width: "3rem",
          height: "0.15rem",
          backgroundColor: "rgb(4, 101, 130)",
        }}
      />
    </Box>
  );
};

export const NewBlog = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        m: "3rem",
      }}
    >
      <Box
        sx={{
          width: "3rem",
          height: "0.15rem",
          backgroundColor: "rgb(4, 101, 130)",
        }}
      />
      <Typography variant="h5" component="h2" color="rgb(4, 101, 130)">
        New Blog
      </Typography>
      <Box
        sx={{
          width: "3rem",
          height: "0.15rem",
          backgroundColor: "rgb(4, 101, 130)",
        }}
      />
    </Box>
  );
};

export const ClaruswayBlog = () => {
  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        display: { xs: "none", sm: "flex" },
      }}
    >
      <Box
        sx={{
          width: "3rem",
          height: "0.15rem",
          backgroundColor: "white",
        }}
      />
      <Typography
        variant="h5"
        component="h2"
        sx={{ color: "rgb(245, 222, 179)" }}
      >
        {"<Clarusway/>"}
        <span style={{ color: "white" }}>Blog</span>
      </Typography>
      <Box
        sx={{
          width: "3rem",
          height: "0.15rem",
          backgroundColor: "white",
        }}
      />
    </Box>
  );
};

export const UpdateBlog = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        m: "3rem",
      }}
    >
      <Box
        sx={{
          width: "3rem",
          height: "0.15rem",
          backgroundColor: "rgb(4, 101, 130)",
        }}
      />
      <Typography variant="h5" component="h2" color="rgb(4, 101, 130)">
        Update Blog
      </Typography>
      <Box
        sx={{
          width: "3rem",
          height: "0.15rem",
          backgroundColor: "rgb(4, 101, 130)",
        }}
      />
    </Box>
  );
};
export const Details = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: "3rem",
      }}
    >
      <Box
        sx={{
          width: "10rem",
          height: "0.3rem",
          backgroundColor: "rgb(4, 101, 130)",
        }}
      />
      <Typography variant="h2" component="h2" color="rgb(4, 101, 130)">
        Details
      </Typography>
      <Box
        sx={{
          width: "10rem",
          height: "0.3rem",
          backgroundColor: "rgb(4, 101, 130)",
        }}
      />
    </Box>
  );
};
