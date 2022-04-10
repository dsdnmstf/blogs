import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import MenuAppBar from "../components/MenuAppbar";
import Image from "../assets/blok.7e6674a5.png";
import { NewBlog } from "../components/Headers";

const NewBlogPage = () => {
  return (
    <div>
      <MenuAppBar />
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

        <Box component="form">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="title"
                label="Title"
                type="text"
                autoComplete="current-password"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="Image_url"
                label="Image URL"
                type="url"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
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

export default NewBlogPage;
