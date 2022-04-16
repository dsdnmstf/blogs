import { Box, Container, Grid, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Image from "../assets/blok.7e6674a5.png";
import { NewBlog } from "../components/Headers";
import { writeBlogData } from "../firebase/firebase";
import { succesNote } from "../toastify/Toastify";

const NewBlogPage = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.firebase.currentUser);
  const [formInfo, setFormInfo] = useState({
    title: "",
    Image_url: "",
    content: "",
    user: currentUser.email,
    id: "",
    like: { count: 0, likeUsers: [""], isLike: false },
  });

  const handleFormInfo = (e) => {
    const { id, value } = e.target;
    setFormInfo({ ...formInfo, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    writeBlogData({ ...formInfo, id: id });
    navigate("/");
    succesNote("Blog succesfully  added");
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
          sx={{}}
          alt="The house from the offer."
          src={Image}
        />
        <NewBlog />

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                onChange={handleFormInfo}
                value={formInfo.title}
                id="title"
                label="Title"
                type="text"
                autoComplete="current-password"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleFormInfo}
                value={formInfo.Image_url}
                id="Image_url"
                label="Image URL"
                type="url"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleFormInfo}
                value={formInfo.content}
                id="content"
                label="Content"
                type="text"
                multiline
                rows={4}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: "15px" }}>
              <Button type="submit" variant="contained" fullWidth>
                SUBMIT
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default NewBlogPage;
