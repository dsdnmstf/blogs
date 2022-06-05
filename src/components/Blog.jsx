import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import { useSelector } from "react-redux";
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

      like.likeUsers.push(currentUser.email);
      updateData(title, Image_url, content, user, id, like);
    } else if (
      (currentUser.email !== user) &
      like.likeUsers.includes(currentUser.email)
    ) {
      like.count = like.count - 1;

      let value = currentUser.email;
      like.likeUsers = like.likeUsers.filter((item) => item !== value);
      updateData(title, Image_url, content, user, id, like);
    } else {
      alert("You cann not like your blog");
    }
  };

  return (
    <Card
      className="cardcont"
      sx={{
        width: 300,
        m: 3,
        boxShadow: "10px 10px 5px 0px #000000a9",
        transition: "all 0.3s",
        "&:hover": {
          transform: "translateY(-1%) !important",
          "box-shadow": " 5px 5px 15px 5px #056582",
        },
      }}
    >
      <Box
        onClick={() => navigate(`/blogdetail/${id}`)}
        sx={{ cursor: "pointer" }}
      >
        <CardMedia component="img" height="140" image={Image_url} alt={title} />
        <CardHeader
          sx={{ bgcolor: "#e7e6f5" }}
          title={title}
          subheader={dates}
        />
        <CardContent
          sx={{ bgcolor: "#e7e6f5", overflow: "hidden", height: "3.6rem" }}
        >
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </Box>

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
          {user}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={handleLike}
          sx={{
            color: like.likeUsers.includes(currentUser.email) && "red",
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
