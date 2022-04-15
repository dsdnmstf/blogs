import { Box, Container, Grid, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Image from "../assets/blok.7e6674a5.png";
import { UpdateBlog } from "../components/Headers";
import { getDataForDetail, updateData } from "../firebase/firebase";
import { succesNote } from "../toastify/Toastify";

const UpdatePage = () => {
  const currentUser = useSelector((state) => state.firebase.currentUser);
  const navigate = useNavigate();
  const { id } = useParams();
  const [updateBlog, setUpdateBlog] = useState([
    {
      title: "",
      Image_url: "",
      content: "",
      user: currentUser.email,
      id: id,
    },
  ]);

  useEffect(() => {
    getDataForDetail(id, setUpdateBlog);
  }, [id]);

  //   const [formInfo, setFormInfo] = useState({
  //     title: "",
  //     Image_url: "",
  //     content: "",
  //     user: currentUser.email,
  //     id: Date.now(),
  //   });

  const handleFormInfo = (e) => {
    const { id, value } = e.target;
    setUpdateBlog({ ...updateBlog, [id]: value });
  };

  const handleSubmit = (e) => {
    const { title, Image_url, content, user, id } = updateBlog;
    e.preventDefault();
    // const id = Date.now();
    updateData(title, Image_url, content, user, id);
    navigate("/");
    succesNote("Blog updated");
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
        <UpdateBlog />

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                onChange={handleFormInfo}
                // defaultValue={updateBlog.title}
                value={updateBlog.title}
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
                // defaultValue={updateBlog.Image_url}
                value={updateBlog.Image_url}
                id="Image_url"
                label="Image URL"
                type="url"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleFormInfo}
                // defaultValue={updateBlog.content}
                value={updateBlog.content}
                id="content"
                label="Content"
                type="text"
                multiline
                rows={4}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: "15px" }}>
              <Button
                type="submit"
                variant="contained"
                // onClick={handleSubmit}
                fullWidth
              >
                SUBMIT
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default UpdatePage;
