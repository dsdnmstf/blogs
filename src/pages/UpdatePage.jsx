import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
} from "@mui/material";
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
    const { name, value } = e.target;
    setUpdateBlog({ ...updateBlog, [name]: value });
  };

  const handleSubmit = (e) => {
    const { title, Image_url, content, user, id, like } = updateBlog;
    e.preventDefault();
    // const id = Date.now();
    updateData(title, Image_url, content, user, id, like);
    navigate("/");
    succesNote("Blog updated");
  };
  return (
    <Box
      className="banner"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        width="400px"
        sx={{
          p: 2,
          bgcolor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          boxShadow: "10px 10px 5px 0px #000000a9",
          borderRadius: "30px",
        }}
      >
        <Box
          width="200px"
          height="200px"
          sx={{
            borderRadius: "50%",
            bgcolor: "#056582",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            width="200px"
            component="img"
            src={"https://blogcw.netlify.app/static/media/blok.7e6674a5.png"}
          ></Box>
        </Box>

        <Typography
          variant="h5"
          component="h1"
          sx={{ mt: 1, color: "#056582", fontWeight: "bold" }}
        >
          ── Update Blog ──
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Title "
            variant="outlined"
            size="small"
            required
            fullWidth
            sx={{
              m: 1,
            }}
            name="title"
            onChange={handleFormInfo}
            value={updateBlog?.title ?? ""}
          />
          <TextField
            id="outlined-basic"
            label="Image URL "
            variant="outlined"
            required
            fullWidth
            size="small"
            sx={{
              m: 1,
            }}
            name="image"
            onChange={handleFormInfo}
            value={updateBlog?.Image_url ?? ""}
          />
          <TextField
            id="outlined-multiline-static"
            label="Content "
            required
            multiline
            fullWidth
            rows={4}
            size="small"
            sx={{
              m: 1,
            }}
            name="text"
            onChange={handleFormInfo}
            value={updateBlog?.content ?? ""}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "#056582",
              fontWeight: "bold",
            }}
          >
            SUBMİT
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UpdatePage;
