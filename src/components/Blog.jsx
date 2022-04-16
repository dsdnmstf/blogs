import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import { useDispatch, useSelector } from "react-redux";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { updateData } from "../firebase/firebase";

const Blog = ({ Image_url, content, title, user, id, like }) => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.firebase.currentUser);
  const date = new Date();
  const dates = [
    date.getDate(),
    " ",
    date.toLocaleString("default", { month: "long" }),
    " ",
    date.getFullYear(),
  ];
  console.log(currentUser.email, user, id);
  console.log(like);
  const handleLike = () => {
    if (
      (currentUser.email !== user) &
      !like.likeUsers.includes(currentUser.email)
    ) {
      like.count = like.count + 1;
      like.isLike = !like.isLike;
      like.likeUsers.push(currentUser.email);
      updateData(title, Image_url, content, user, id, like);
    } else if (
      (currentUser.email !== user) &
      like.likeUsers.includes(currentUser.email)
    ) {
      like.count = like.count - 1;
      like.isLike = !like.isLike;
      let value = currentUser.email;
      like.likeUsers = like.likeUsers.filter((item) => item !== value);
      updateData(title, Image_url, content, user, id, like);
    } else {
      alert("You cann not like your blog");
    }
  };

  return (
    <Card sx={{ maxWidth: 345, margin: "1rem" }}>
      <CardMedia
        component="img"
        height="194"
        image={Image_url}
        alt={title}
        onClick={() => navigate(`/blogdetail/${id}`)}
      />
      <Box
        onClick={() => navigate(`/blogdetail/${id}`)}
        sx={{
          bgcolor: "lightgray",
          display: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardHeader
          title={title}
          subheader={dates}
          sx={{
            bgcolor: "lightgray",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          // subheader={`${monts[new Date().getMonth()]}
          //   ${new Date().getDate()},
          //   ${new Date().getFullYear()}`}
        />

        <CardContent
          sx={{
            bgcolor: "lightgray",
            overflow: "hidden",
            overflow: "hidden",
            maxHeight: "1rem",
          }}
        >
          <Typography
            sx={{ overflow: "hidden" }}
            component="div"
            variant="body2"
            color="text.secondary"
          >
            {content}
          </Typography>
        </CardContent>
      </Box>
      <CardContent sx={{ display: "flex", gap: "1rem" }}>
        <AccountCircle />
        <Typography>{user}</Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={handleLike}
          sx={{
            color:
              (currentUser.email !== user) & (like.isLike == true) && "red",
          }}
        >
          <FavoriteIcon />
        </IconButton>
        <span>{like.count}</span>
        <IconButton aria-label="share">
          <ModeCommentOutlinedIcon />
        </IconButton>
        <span>0</span>
      </CardActions>
    </Card>
  );
};

export default Blog;
