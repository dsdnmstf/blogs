import { AccountCircle } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteData, getDataForDetail } from "../firebase/firebase";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { succesNote } from "../toastify/Toastify";

const BlogDetail = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.firebase.currentUser);
  const [blogDetail, setBlogDetail] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getDataForDetail(id, setBlogDetail);
  }, [id, setBlogDetail]);
  const date = new Date();
  const dates = [
    date.getDate(),
    " ",
    date.toLocaleString("default", { month: "long" }),
    " ",
    date.getFullYear(),
  ];
  return (
    <Box
      className="banner"
      sx={{
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        flexDirection: "column",
        height: "120vh",
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          borderRadius: "20px",
          m: 3,
          boxShadow: "10px 10px 5px 0px #000000a9",
          textAlign: "center",
        }}
      >
        <CardMedia
          component="img"
          image={blogDetail.Image_url}
          alt={blogDetail.title}
        />
        <CardHeader
          sx={{ bgcolor: "#e7e6f5" }}
          title={blogDetail.title}
          subheader={dates}
          // subheader={`${monts[new Date().getMonth()]}
          //   ${new Date().getDate()},
          //   ${new Date().getFullYear()}`}
        />
        <CardContent sx={{ bgcolor: "#e7e6f5" }}>
          <Typography variant="body2" color="text.secondary">
            {blogDetail.content}
          </Typography>
        </CardContent>
        <CardContent sx={{ textAlign: "left", m: 0, p: 0 }}>
          <Typography variant="body2" color="text.secondary">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            {blogDetail.user}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>

      {currentUser?.email === blogDetail.user && (
        <Box>
          <Button
            variant="contained"
            sx={{ marginRight: "6rem", bgcolor: "#3D3D3D", fontWeight: "bold" }}
            onClick={() => navigate(`/updatepage/${id}`)}
          >
            UPDATE
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "red",
              color: "#fff",
              fontWeight: "bold",
            }}
            className="delete"
            onClick={() => {
              deleteData(id);
              navigate("/");
              succesNote("Deleted succesfully");
            }}
          >
            DELETE
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default BlogDetail;
