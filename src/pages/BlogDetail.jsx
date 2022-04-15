import { AccountCircle } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Details } from "../components/Headers";
import { deleteData, getDataForDetail } from "../firebase/firebase";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
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
  }, []);
  const date = new Date();
  const dates = [
    date.getDate(),
    " ",
    date.toLocaleString("default", { month: "long" }),
    " ",
    date.getFullYear(),
  ];
  return (
    <div>
      <Details />
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <Card
            sx={{ margin: "1rem" }}
            // onClick={() => navigate(`/blogdetail/${id}`)}
          >
            <CardMedia
              component="img"
              height="194"
              image={blogDetail.Image_url}
              alt={blogDetail.title}
            />
            <CardHeader
              title={blogDetail.title}
              subheader={dates}
              // subheader={`${monts[new Date().getMonth()]}
              //   ${new Date().getDate()},
              //   ${new Date().getFullYear()}`}
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {blogDetail.content}
              </Typography>
            </CardContent>
            <Container sx={{ display: "flex", gap: "1rem" }}>
              <AccountCircle />
              <Typography>{blogDetail.user}</Typography>
            </Container>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <span>0</span>
              <IconButton aria-label="share">
                <ModeCommentOutlinedIcon />
              </IconButton>
              <span>0</span>
            </CardActions>
          </Card>
        </Grid>

        {currentUser.email == blogDetail.user && (
          <Grid
            item
            xs={8}
            container
            justifyContent="space-around"
            alignItems="center"

            // justifyContent="space-around"
          >
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                deleteData(id);
                navigate("/");
                succesNote("Deleted succesfully");
              }}
            >
              DELETE
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate(`/updatepage/${id}`)}
            >
              UPDATE
            </Button>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default BlogDetail;
